'use client'
import { useEffect, useState } from 'react'
import Authenticated from '@/app/layouts/authenticated'
import Curve from '@/public/images/curve.png'
import Image from 'next/image'
import Cookies from 'js-cookie'
import { errorToast } from '@/utils/error-toast'
import { processChartData } from '@/utils/dashboard/process-chart-data'
import RenderChart from './chart'
import EditProfile from './edit-profile'
import DashboardLoader from '@/components/application/dashboard-loader'
import { stats } from './stats'
import VerifiedCheckMark from './verified-check'
import { clearUserSession } from '@/utils/clear-user-session'
import Filter, { formatDate } from './filter'
import { getOneMonthAgoDate } from '@/utils/dashboard/one-month-ago'
import OurApps from './our-apps'

export default function Dashboard() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(stats)
    const [user, setUser] = useState(null)

    // Fetch Jobs and Vets
    const getDatas = async url => {
        const config = {
            url: url,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer ' + user.token,
            },
        }
        const axios = require('axios')
        try {
            const request = await axios.request(config)
            if (request?.data) {
                setData(processChartData(request.data.data.dashboard))
            }
        } catch (error) {
            errorToast(
                'Error Fetching Data',
                error?.response?.data?.message ||
                    error.message ||
                    'Failed To Fetch Statistics Data',
            )
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    useEffect(() => {
        let storedData = Cookies.get('analogueshifts')
        if (storedData) {
            setUser(JSON.parse(storedData))
        }
    }, [])

    useEffect(() => {
        if (user) {
            getDatas(
                process.env.NEXT_PUBLIC_BACKEND_URL +
                    '/dashboard?start=' +
                    `${formatDate(getOneMonthAgoDate())}${
                        '&stop=' + formatDate(new Date())
                    }`,
            )
        }
    }, [user])

    return (
        <Authenticated
            header={
                <h2 className="text-xl font-bold text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>
            {loading && <DashboardLoader />}
            <div className="w-full min-w-[300px] px-1.5 min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-112px)]">
                <div className="w-full h-60 md:rounded-2xl bg-tremor-background-brown flex justify-end">
                    <Image src={Curve} alt="" />
                </div>
                <div className="bg-white relative -translate-y-12 md:ml-5 min-h-[calc(100vh-240px)] h-max w-full md:w-[calc(100%-40px)] px-5 pb-5 md:rounded-xl flex flex-col">
                    {/* Profile Overview */}

                    <div className="w-32 h-32 bg-white rounded-full flex justify-center -translate-y-12 items-center">
                        <img
                            width={112}
                            height={112}
                            src={
                                user?.user?.profile
                                    ? user.user.profile
                                    : '/images/profile_avatar.JPG'
                            }
                            alt="Profile"
                            className="rounded-full object-cover h-28 w-28 "
                        />
                    </div>
                    <div className="-translate-y-5">
                        <div className="w-full gap-2 flex items-center">
                            <h2 className="text-2xl font-bold truncate w-max max-w-[90%] text-gray-800">
                                {user?.user?.first_name}{' '}
                                {user?.user?.last_name &&
                                    ' ' + user.user.last_name}
                            </h2>
                            {user?.user?.email_verified_at && (
                                <VerifiedCheckMark />
                            )}
                        </div>
                        <p className="text-gray-600">{user?.user?.email}</p>
                        {/* <p className="text-blue-500">Nigeria</p> */}
                    </div>
                    {/* Metric Overview */}

                    {user && (
                        <EditProfile user={user} updateLoading={setLoading} />
                    )}

                    <RenderChart chartData={data} />
                    <Filter submit={url => getDatas(url)} />
                    <OurApps />
                </div>

                <div className="flex flex-col overflow-hidden"></div>
            </div>
        </Authenticated>
    )
}
