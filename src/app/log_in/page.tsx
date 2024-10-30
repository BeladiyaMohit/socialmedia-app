"use client"
import IconFacebook from '@/components/icons/icon-facebook'
import IconGoogle from '@/components/icons/icon-google'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { AtSign, TriangleAlert, User } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string(),
  // password: z.string()
  //   .min(8, 'Password must be at least 8 characters long')
  //   .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'Password must contain at least 1 uppercase letter, 1 lowercase letter,1 number,1 special character'),
});

export default function Home() {

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: any) {
    console.log("data", data);
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }

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
      <div className="flex overflow-y-auto">
        <Card className="m-auto w-full max-w-[400px] space-y-[30px] p-5 shadow-2xl md:w-[400px]">
          <CardHeader className="flex space-y-2 justify-center">
            <h2 className="text-lg font-semibold text-black lg:text-xl/tight">
              LOGO
            </h2>
          </CardHeader>
          <CardContent className="space-y-[30px]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="relative space-y-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={"block font-semibold leading-none text-black"}>Email address</FormLabel>
                        <FormControl>
                          <Input
                            variant={'input-form'}
                            placeholder="username@domain.com"
                            iconRight={
                              <AtSign className="size-[18px]" />
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>

                    )}
                  />
                </div>
                {/* <div className="!mt-2.5 flex items-center gap-2">
                  <TriangleAlert className="size-[18px] shrink-0 text-danger" />
                  <p className="text-xs/tight font-medium text-danger">
                    Please enter an email address in the format{' '}
                    <span className="font-bold">
                      username@gmail.com
                    </span>
                  </p>
                </div> */}
                <div className="relative space-y-3">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={"block font-semibold leading-none text-black"}>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            variant={'input-form'}
                            placeholder="Abc*********"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
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
                    href="/sign_up"
                    className="pl-1.5 text-sm/tight underline underline-offset-4 hover:text-[#3C3C3D]"
                  >
                    Register
                  </Link>
                </div>

              </form>
            </Form>
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
