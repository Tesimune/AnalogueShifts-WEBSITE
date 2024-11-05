'use client'
import { useState, useRef } from 'react'
import { useToast } from '@/contexts/toast'
import { useHire } from '@/hooks/hires'

export default function UploadResume({ resumes, addResume }) {
    const [loading, setLoading] = useState(false)
    const fileRef = useRef()
    const { notifyUser } = useToast()
    const { uploadFile } = useHire()

    const handleFileChange = e => {
        const maxFileSize = 5 * 1024 * 1024
        const selectedFile = e.target.files[0]
        if (selectedFile && selectedFile.size > maxFileSize) {
            notifyUser('error', 'File size exceeds the limit (5 MB)')
            return
        }
        if (selectedFile) {
            uploadFile({
                fileValue: selectedFile,
                setLoading,
                setData: path => {
                    addResume([
                        ...resumes,
                        {
                            id: crypto.randomUUID(),
                            name: selectedFile?.name || path,
                            url: path,
                            dateAdded: new Date().toLocaleDateString(),
                        },
                    ])
                },
                fileType: 'file',
            })
        }
    }

    return (
        <section>
            {/* The File Input */}
            <input
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                ref={fileRef}
                type="file"
                className="-z-10 hidden opacity-0"
            />

            <div class="element-with-border">
                <svg height="100%" width="100%">
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        stroke={loading ? '#FFBB0A' : '#E8E8E8'}
                        fill="transparent"
                        stroke-width="3"
                        stroke-dasharray="15, 10"
                    />
                </svg>
                <div
                    onClick={() => fileRef.current.click()}
                    class="content max-w-full dashed-border cursor-pointer w-full h-[97px]  rounded-[8px]  px-5  justify-center  flex flex-col items-center">
                    {loading ? (
                        <p className="flex text-tremor-background-darkYellow items-center gap-1.5 mb-1">
                            <span className="font-medium text-xs">
                                Uploading...
                            </span>
                        </p>
                    ) : (
                        <>
                            {' '}
                            <p className="flex text-[#292929] items-center gap-1.5 mb-1">
                                <span className="font-medium text-xs">
                                    Add {resumes?.length > 0 && 'Another'}{' '}
                                    Resume/CV
                                </span>
                            </p>
                            <p className="font-light text-[8px] text-[#525252] mb-1">
                                Supported file types: pdf, .doc
                            </p>
                            <p className="font-light text-[8px] text-[#525252]">
                                The file size can be up to 5MB
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
