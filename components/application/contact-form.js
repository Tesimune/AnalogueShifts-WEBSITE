'use client'
import { useState } from 'react'
import LoadingTwo from '@/components/ui/loading-spinner'
import { toast } from 'react-toastify'
import { toastConfig } from '@/utils/toast-config'
import { errorToast } from '@/utils/error-toast'

export default function ContactForm() {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')
    const [tel, setTel] = useState('')

    const sendMail = async e => {
        e.preventDefault()
        const axios = require('axios')
        const data = { name, email, tel, subject, message }
        const config = {
            method: 'POST',
            url: process.env.NEXT_PUBLIC_BACKEND_URL + '/contact',
            headers: { 'Content-Type': 'application/json' },
            data: data,
        }
        try {
            setLoading(true)
            await axios.request(config)
            setLoading(false)
            toast.success(
                'Message sent successfully, We will get in touch.',
                toastConfig,
            )
            setName('')
            setEmail('')
            setMessage('')
            setSubject('')
            setTel('')
        } catch (error) {
            setLoading(false)
            errorToast(
                'Message sending failed, Try again later',
                error?.response?.data?.message || error.message || '',
            )
        }
    }

    return (
        <>
            {loading && <LoadingTwo />}

            <div id="form" className="bg-gray-200 rounded-md py-16">
                <div>
                    <div className="flex justify-center w-full">
                        <span className="bg-as text-white p-2 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-9 h-9">
                                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                            </svg>
                        </span>
                    </div>
                    <div className="text-center mb-5">
                        <h1 className="text-3xl font-bold">Get in touch</h1>
                        <p className="font-semibold text-gray-500 mb-0">
                            We'd love to hear from you
                        </p>
                    </div>
                    <div className="flex justify-center text-yellow-900 w-full py-9 px-5 md:px-24">
                        <form
                            onSubmit={sendMail}
                            className="flex flex-col gap-9 w-full">
                            <div className="grid md:flex gap-5">
                                <div className="grid gap-5 w-full">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="bg-slate-100 w-full py-2 px-3 outline-none rounded border-l-2 border-as"
                                        name="name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="grid gap-5 w-full">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="bg-slate-100 w-full py-2 px-3 outline-none rounded border-l-2 border-as"
                                        name="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid gap-5 w-full">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    className="bg-slate-100 w-full py-2 px-3 outline-none rounded border-l-2 border-as"
                                    name="phone"
                                    value={tel}
                                    onChange={e => setTel(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-5 w-full">
                                <label>Subject</label>
                                <input
                                    type="text"
                                    className="bg-slate-100 w-full py-2 px-3 outline-none rounded border-l-2 border-as"
                                    name="subject"
                                    value={subject}
                                    onChange={e => setSubject(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-5 w-full">
                                <label>Message</label>
                                <textarea
                                    className="bg-slate-100 h-56 w-full py-2 px-3 outline-none rounded border-l-2 border-as"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="w-full flex justify-end">
                                <button
                                    type="submit"
                                    className="px-5 py-2.5 text-sm rounded-lg duration-300 hover:-translate-y-1 text-white bg-as">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
