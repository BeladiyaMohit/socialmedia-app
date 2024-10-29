import IconFacebook from '@/components/icons/icon-facebook'
import IconGoogle from '@/components/icons/icon-google'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { AtSign, TriangleAlert, User } from 'lucide-react'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="grid h-screen w-full gap-5 md:grid-cols-2 space-x-2">
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
      <div className="flex overflow-y-auto">
        <Card className="m-auto w-full max-w-[400px] space-y-[30px] p-5 shadow-2xl md:w-[400px]">
          <CardHeader className="flex space-y-2 justify-center">
            <h2 className="text-lg font-semibold text-black lg:text-xl/tight">
              LOGO
            </h2>
          </CardHeader>
          <CardContent className="space-y-[30px]">
            <form className="space-y-[30px]">
              <div className="relative space-y-3">
                <label className="block font-semibold leading-none text-black">
                  Email address
                </label>
                <Input
                  type="email"
                  variant={'input-form'}
                  placeholder="username@domain.com"
                  iconRight={
                    <AtSign className="size-[18px]" />
                  }
                />
              </div>
              <div className="!mt-2.5 flex items-center gap-2">
                <TriangleAlert className="size-[18px] shrink-0 text-danger" />
                <p className="text-xs/tight font-medium text-danger">
                  Please enter an email address in the format{' '}
                  <span className="font-bold">
                    username@gmail.com
                  </span>
                </p>
              </div>
              <div className="relative space-y-3">
                <label className="block font-semibold leading-none text-black">
                  Password
                </label>
                <Input
                  type="password"
                  variant={'input-form'}
                  placeholder="Abc*********"
                />
              </div>
              <Link
                href="/forgot"
                className="!mt-4 block text-right text-xs/4 font-semibold text-black underline underline-offset-[3px] hover:text-[#3C3C3D]"
              >
                Forgot password?
              </Link>
              <Button
                type="submit"
                variant={'black'}
                size={'large'}
                className="w-full"
              >
                Login
              </Button>
              <div className="text-center text-xs/4 font-semibold text-black">
                Don’t have an account?
                <Link
                  href="/register"
                  className="pl-1.5 text-sm/tight underline underline-offset-4 hover:text-[#3C3C3D]"
                >
                  Register
                </Link>
              </div>
            </form>
            <div className="grid grid-cols-2 gap-4">
              <Button variant={'outline-general'} size={'large'}>
                <IconGoogle className="!size-[18px]" />
                Google
              </Button>
              <Button variant={'outline-general'} size={'large'}>
                <IconFacebook className="!size-[18px] text-[#0866FF]" />
                Facebook
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
