import Progress from '../dashboard/components/progress'
export default function Page() {
    return (
        <section className="w-full flex justify-center">
            <div className="w-full max-w-[1003px] xl:flex-row flex-col flex gap-8">
                <div className="xl:w-[calc(100%-320px)] large:max-h-[calc(100dvh-152px)] max-h-[calc(100dvh-136px)] tablet:h-[40dvh] sticky top-[112px] large:top-[120px] tablet:static w-full bg-white rounded-[32px] p-8 tablet:p-5 flex justify-center items-center">
                    <p className="text-center  tablet:max-w-full max-w-full  tablet:leading-7 leading-8 large:leading-48 font-normal tablet:text-sm text-base large:text-xl text-tremor-brand-boulder400">
                        Coming Soon...
                    </p>
                </div>
                <Progress />
            </div>
        </section>
    )
}
