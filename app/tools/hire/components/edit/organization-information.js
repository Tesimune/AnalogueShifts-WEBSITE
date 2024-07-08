'use client'
import { useState, useEffect, useRef } from 'react'
import CreateJobLayout from './layout'
import Cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import DashboardLoader from '@/components/application/dashboard-loader'
import FileInput from '@/components/application/file-input'
import { motion } from 'framer-motion'
import { uploadFile } from '@/utils/hire-talents/upload-file'
import { editJob } from '@/utils/hire-talents/edit-job'

export default function OrganizationInformation() {
    const pathname = usePathname()
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [organizationName, setOrganizationName] = useState('')
    const [fileUploading, setFileUploading] = useState(false)
    const [organizationUrl, setOrganizationUrl] = useState('')
    const [logoFileUrl, setLogoFileUrl] = useState('')
    const [logoFile, setLogoFile] = useState(null)
    const [logoUrl, setLogoUrl] = useState('')
    const [isUrlType, setIsUrlType] = useState(false)
    const [allFieldEntered, setAllFieldEnter] = useState(true)
    const [editID, setEditId] = useState(0)
    const submitButtonRef = useRef()
    let slug = pathname.slice(17, pathname.length).split('/')[0]

    // Prefill The form with the data stored in the Cookies and at the same time, set the user session
    useEffect(() => {
        let authData = JSON.parse(Cookies.get('analogueshifts'))
        let storedData = Cookies.get('jobEditingData')
        if (storedData) {
            if (JSON.parse(storedData).organizationInformation) {
                var organizationInformationData = JSON.parse(storedData)
                    .organizationInformation

                setLogoUrl(organizationInformationData.organizationLogo)
                setOrganizationName(
                    organizationInformationData.organizationName,
                )
                setOrganizationUrl(organizationInformationData.organizationUrl)
                setIsUrlType(true)
            }
            setEditId(JSON.parse(storedData).editId)
        } else if (
            !storedData ||
            !JSON.parse(storedData).jobInformation ||
            !JSON.parse(storedData).jobDetails ||
            !JSON.parse(storedData).jobLocation
        ) {
            // Take the user to the Job Information for they have not filled the previous pages
            router.push(`/tools/hire/edit/${slug}/job-information`)
        }
        if (authData) {
            setUser(authData)
        }
    }, [])

    // Check if all inputs have been filled
    useEffect(() => {
        var returnValue = false
        ;[organizationName].forEach(item => {
            if (item === '') {
                returnValue = true
            }
        })
        setAllFieldEnter(returnValue)
    }, [organizationName])

    // Handle Form Submit
    const submit = e => {
        e.preventDefault()
        let storedData = Cookies.get('jobEditingData')
        let existingItem = JSON.parse(storedData)

        // Arrange The Data Structure
        let data = {
            title: existingItem.jobInformation.title,
            description: existingItem.jobInformation.description,
            identifier: {
                '@type': 'PropertyValue',
                name: existingItem.jobInformation.identifierName,
                value: existingItem.jobInformation.identifierValue,
            },
            validThrough: existingItem.jobInformation.validThrough,
            employmentType: existingItem.jobDetails.employmentType,
            hiringOrganization: {
                '@type': 'Organization',
                name: organizationName,
                sameAs: organizationUrl,
                logo: isUrlType ? logoUrl : logoFileUrl,
            },
            jobLocation: {
                '@type': 'Place',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: existingItem.jobLocation.streetAddress,
                    addressLocality: existingItem.jobLocation.addressLocality,
                    addressRegion: existingItem.jobLocation.addressRegion,
                    postalCode: existingItem.jobLocation.postalCode,
                    addressCountry: existingItem.jobLocation.addressCountry,
                },
            },
            jobLocationType: existingItem.jobLocation.jobLocationType,
            applicantLocationRequirements: [
                ...existingItem.jobLocation.stateRequirements,
                ...existingItem.jobLocation.countryRequirements,
            ],
            baseSalary: {
                '@type': 'MonetaryAmount',
                currency: existingItem.jobDetails.salaryCurrency,
                value: {
                    '@type': 'QuantitativeValue',
                    value: existingItem.jobDetails.salaryValue,
                    unitText: existingItem.jobDetails.salaryUnitText,
                },
            },
            apply: existingItem.jobDetails.apply,
            directApply: existingItem.jobDetails.directApply,
            status: existingItem.jobDetails.status,
        }

        // Call the Edit Function with the data as Parameter
        editJob(data, user, setLoading, router)
    }

    return (
        <CreateJobLayout>
            {loading && <DashboardLoader />}
            <form onSubmit={submit} className="w-full flex flex-col gap-6">
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            ORGANIZATION NAME{' '}
                            <span className="text-red-600 text-lg">*</span>
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            The official name of the company or organization
                            offering the job
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <input
                            required
                            type="text"
                            value={organizationName}
                            onChange={e => setOrganizationName(e.target.value)}
                            placeholder="e.g “AnalogueShifts”"
                            className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                        />
                    </div>
                </div>
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            ORGANIZATION WEBSITE
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            This refers to the web address (URL) of the
                            organization's official website.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <input
                            type="url"
                            value={organizationUrl}
                            onChange={e => setOrganizationUrl(e.target.value)}
                            placeholder="e.g “www.analogueshifts.com”"
                            className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                        />
                    </div>
                </div>
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            ORGANIZATION LOGO
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            This is the graphical symbol or emblem representing
                            the organization.
                        </p>
                        <div className="w-full flex items-center flex-wrap gap-2.5">
                            <p className="font-light text-[13px] text-tremor-brand-boulder900">
                                Use Url Format
                            </p>
                            <div
                                className="switch"
                                data-isOn={isUrlType}
                                onClick={() => setIsUrlType(!isUrlType)}>
                                <motion.div
                                    className="handle"
                                    layout
                                    transition={{
                                        opacity: { ease: 'linear' },
                                        layout: { duration: 0.3 },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        {!isUrlType ? (
                            <div className="relative w-full h-max rounded-3xl overflow-hidden">
                                {fileUploading && (
                                    <div
                                        style={{ zIndex: 3000 }}
                                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-300/30 bg-opacity-80">
                                        <div className="lds-roller">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                )}
                                <FileInput
                                    value={logoFile}
                                    setValue={value =>
                                        uploadFile(
                                            value,
                                            user,
                                            setFileUploading,
                                            setLogoFileUrl,
                                            setLogoFile,
                                        )
                                    }
                                />
                            </div>
                        ) : (
                            <input
                                type="url"
                                value={logoUrl}
                                onChange={e => setLogoUrl(e.target.value)}
                                placeholder="e.g “www.analogueshifts.com/logo.png”"
                                className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                            />
                        )}
                    </div>
                </div>

                <input
                    ref={submitButtonRef}
                    type="submit"
                    className="-z-10 opacity-0"
                />
            </form>
            <div className="flex w-full justify-between">
                <Link
                    href={`/tools/hire/edit/${slug}/job-location`}
                    className={`px-6 text-tremor-background-darkYellow text-base border duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-transparent border-tremor-background-darkYellow rounded-full`}>
                    <i className="fas fa-arrow-left "></i> Previous
                </Link>
                <button
                    disabled={allFieldEntered}
                    onClick={() => submitButtonRef.current.click()}
                    type="button"
                    className={`px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none ${
                        allFieldEntered ? 'opacity-50' : 'opacity-100'
                    }`}>
                    Edit Job
                </button>
            </div>
        </CreateJobLayout>
    )
}
