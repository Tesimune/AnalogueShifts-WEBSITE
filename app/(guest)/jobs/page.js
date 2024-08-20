// Sections
import Hero from './components/hero'
import RecentJobs from './components/recent-jobs'
import AvailableJobs from './components/available-jobs'
import PostAJob from '@/components/application/home-page/post-a-job'
import DownloadApp from '@/components/application/home-page/download-app'

export const metadata = {
    title: 'Find High Paying Remote Tech Jobs | Analogue Shifts',
    description:
        'Analogue Shifts offers a curated list of high-paying remote tech jobs. Find the perfect job for you and enjoy the flexibility of working remotely.',
    openGraph: {
        title: 'Find High Paying Remote Tech Jobs | Analogue Shifts',
        description:
            'Analogue Shifts offers a curated list of high-paying remote tech jobs. Find the perfect job for you and enjoy the flexibility of working remotely.',
        url: 'https://www.analogueshifts.com/jobs',
        siteName: 'AnalogueShifts',
        images: [
            {
                url: '/images/a4.jpg',
                width: 800,
                height: 600,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: '/jobs',
    },
}

export default async function Page({ searchParams }) {
    const page = searchParams.page || '1'
    const jobs = await getJobs(page)

    return (
        <>
            <Hero />
            <RecentJobs jobs={jobs?.data?.jobs?.data} />
            <AvailableJobs initialData={jobs?.data?.jobs} />
            <PostAJob />
            <DownloadApp />
        </>
    )
}

const getJobs = async page => {
    try {
        const url = new URL('https://api.analogueshifts.com/api/jobs')
        url.searchParams.append('page', page)

        const res = await fetch(url.toString(), {
            next: {
                revalidate: 60,
            },
        })

        // Check if the response content type is JSON
        const contentType = res.headers.get('Content-Type') || ''
        if (!contentType.includes('application/json')) {
            throw new Error('Invalid response type')
        }

        if (res.ok) {
            return await res.json()
        } else {
            throw new Error(
                `Failed to fetch jobs: ${res.status} ${res.statusText}`,
            )
        }
    } catch (error) {
        console.error('Error fetching jobs:', error)
        return null
    }
}