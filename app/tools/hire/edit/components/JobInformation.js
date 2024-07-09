'use client'
import { useState, useEffect, useRef } from 'react'
import EditJobLayout from './layout'
import Cookies from 'js-cookie'
import Tiptap from '@/components/application/utilities/Tiptap'
import { usePathname, useRouter } from 'next/navigation'
import { generateValidThrough } from '../../utilities/generate-valid-through'

export default function JobInformation() {
    const router = useRouter()
    const pathname = usePathname()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState(null)
    const [identifierName, setIdentifierName] = useState('')
    const [identifierValue, setIdentifierValue] = useState('')
    const [validThrough, setValidThrough] = useState(generateValidThrough())
    const [allFieldEntered, setAllFieldEnter] = useState(true)
    const submitButtonRef = useRef()
    let slug = pathname.slice(17, pathname.length).split('/')[0]

    // Prefill The form with the data stored in the Cookies
    useEffect(() => {
        let storedData = Cookies.get('jobEditingData')
        if (storedData) {
            console.log(JSON.parse(storedData))
            if (JSON.parse(storedData).jobInformation) {
                var jobInformationData = JSON.parse(storedData).jobInformation
                setTitle(jobInformationData.title)
                setDescription(jobInformationData.description)
                setIdentifierName(jobInformationData.identifierName)
                setIdentifierValue(jobInformationData.identifierValue)
                setValidThrough(jobInformationData.validThrough)
            } else {
                setDescription('')
            }
        } else {
            setDescription('')
        }
    }, [])

    // Check if all inputs have been filled
    useEffect(() => {
        var returnValue = false
        ;[title, description, validThrough].forEach(item => {
            if (item === '') {
                returnValue = true
            }
        })
        setAllFieldEnter(returnValue)
    }, [title, description, validThrough])

    // Handle Form Submit
    const submit = e => {
        e.preventDefault()

        // store the Form data in Cookies and navigate to the next page
        let storedData = Cookies.get('jobEditingData')
        let jobInfoData = {
            title: title,
            description: description,
            identifierName: identifierName,
            identifierValue: identifierValue,
            validThrough: validThrough,
        }

        let existingItem = JSON.parse(storedData)
        Cookies.set(
            'jobEditingData',
            JSON.stringify({
                ...existingItem,
                jobInformation: jobInfoData,
            }),
        )

        router.push(`/tools/hire/edit/${slug}/job-details`)
    }

    return (
        <EditJobLayout>
            <form onSubmit={submit} className="w-full flex flex-col gap-6">
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            JOB TITLE{' '}
                            <span className="text-red-600 text-lg">*</span>
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            A Job posting must describe one position only
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <input
                            required
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="e.g “Product designer”"
                            className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                        />
                    </div>
                </div>
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            JOB DESCRIPTION{' '}
                            <span className="text-red-600 text-lg">*</span>
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            Provide a short description about the job. Keep it
                            short and to the point.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        {description !== null && (
                            <Tiptap
                                changed={data => setDescription(data)}
                                initialData={description}
                            />
                        )}
                    </div>
                </div>
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            Identifier Name
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            A label for tracking the job internally.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <input
                            type="text"
                            value={identifierName}
                            onChange={e => setIdentifierName(e.target.value)}
                            placeholder="e.g “JobID”"
                            className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                        />
                    </div>
                </div>
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            Identifier Value
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            A corresponding code or value assigned to the
                            identifier name, serving as a unique identifier
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <input
                            type="text"
                            value={identifierValue}
                            onChange={e => setIdentifierValue(e.target.value)}
                            placeholder="e.g “123456”"
                            className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                        />
                    </div>
                </div>

                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            Valid Through
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            The deadline for applying for the job.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <input
                            type="date"
                            required
                            value={validThrough}
                            onChange={e => setValidThrough(e.target.value)}
                            className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                        />
                    </div>
                </div>
                <input
                    ref={submitButtonRef}
                    type="submit"
                    className="-z-10 opacity-0"
                />
            </form>
            <div className=" flex w-full justify-end">
                <button
                    onClick={() => submitButtonRef.current.click()}
                    type="button"
                    disabled={allFieldEntered}
                    className={`px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none ${
                        allFieldEntered ? 'opacity-50' : 'opacity-100'
                    }`}>
                    Next <i className="fas fa-arrow-right "></i>
                </button>
            </div>
        </EditJobLayout>
    )
}
