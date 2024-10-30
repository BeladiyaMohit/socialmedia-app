import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Password() {
    return (
        <div className="grid h-screen w-full gap-5 md:grid-cols-2">
            <div className="relative hidden overflow-hidden bg-[#000000]  md:block md:h-full">
                <div className="absolute left-1/2 top-1/4 w-full max-w-md -translate-x-1/2 space-y-3 px-3 text-center text-white">
                    <h2 className="text-lg font-bold sm:text-2xl lg:text-[30px]/9">
                        Social Media
                    </h2>
                    <p className="text-sm lg:text-xl/[30px]">
                        create your page for social page.
                    </p>
                </div>
            </div>
            <div className="flex overflow-y-auto py-2">
                <Card className="m-auto w-full max-w-[400px] space-y-[30px] p-5 shadow-2xl md:w-[400px]">
                    <CardHeader className="space-y-2">
                        <h2 className="text-xl/tight font-semibold text-black">
                            Set new password
                        </h2>
                        <p className="font-medium leading-tight">
                            Must be at least 8 characters
                        </p>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-[30px]">
                            <div className="relative space-y-3">
                                <label className="block font-semibold leading-none text-black">
                                    password
                                </label>
                                <Input
                                    type="password"
                                    variant={'input-form'}
                                    placeholder="Abc*********"
                                />
                                <div className="!mt-4 grid grid-cols-3 gap-[18px]">
                                    <span className="h-1 rounded-full bg-red-300" />
                                    <span className="h-1 rounded-full bg-orange-300" />
                                    <span className="h-1 rounded-full bg-green-300" />
                                </div>
                            </div>
                            <div className="relative space-y-3">
                                <label className="block font-semibold leading-none text-black">
                                    Confirm password
                                </label>
                                <Input
                                    type="password"
                                    variant={'input-form'}
                                    placeholder="Abc*********"
                                />
                            </div>

                            <Button
                                type="submit"
                                variant={'black'}
                                size={'large'}
                                className="w-full"
                            >
                                Reset password
                            </Button>
                            <Link
                                href="/log_in"
                                className="flex items-center justify-center gap-2 pl-1.5 text-sm/tight font-semibold text-black hover:text-[#3C3C3D]"
                            >
                                <ArrowLeft className="size-[18px]" />
                                Back to Login
                            </Link>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
