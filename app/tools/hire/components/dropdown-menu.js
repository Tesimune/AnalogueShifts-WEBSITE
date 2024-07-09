import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export default function DropdownMenu({ value, onChange, list }) {
    return (
        <div className="relative">
            <Select value={value} onValueChange={e => onChange(e)}>
                <SelectTrigger className="text-[13px] text-tremor-brand-boulder950 w-full h-14 cursor-default rounded-2xl bg-transparent py-1.5 pl-3 pr-10 text-left  focus:outline-none focus:ring-2 focus:ring-tremor-background-darkYellow sm:text-sm sm:leading-6">
                    <SelectValue placeholder={value} />
                </SelectTrigger>
                <SelectContent
                    className="rounded-3xl bg-white text-base shadow-lg focus:outline-none sm:text-sm py-3"
                    style={{
                        boxShadow: '0px 20px 417px 0px #00000012',
                    }}>
                    {list.map(item => {
                        return (
                            <SelectItem
                                className="text-tremor-brand-boulder300 cursor-pointer border-transparent relative h-[42px] text-[13px] border select-none py-2 pl-3 pr-9 focus:bg-[#FFBB0A0F] focus:text-tremor-brand-boulder950 focus:border-[#FFBB0A0D]"
                                key={item}
                                value={item}>
                                {item}
                            </SelectItem>
                        )
                    })}
                </SelectContent>
            </Select>
        </div>
    )
}
