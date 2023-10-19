"use client";
import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";

const LoginPage = () => {
  const user_name = useRef("");
  const pass_word = useRef("");
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: user_name.current,
      password: pass_word.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  const handleSignIn = async () => {
    await signIn("github", { callbackUrl: "/" });
  };
  return (
    <div className="container flex items-center h-screen">
      <Card className="md:w-5/12 mx-auto">
        <CardHeader className="space-y-1 ">
          <CardTitle className="text-2xl flex justify-center gap-2">
            <Image src="/logo.png" alt="logo" width={30} height={30} />
            <p className="text-xl text-muted-foreground">Terminator</p>
          </CardTitle>

          <CardDescription className="pt-8">
            还没有账号？
            <Link href="/api/signup" className="text-blue-600">
              立即注册
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative w-full">
            <Button variant="outline" className="w-full" onClick={handleSignIn}>
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github登入
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                或选择
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">邮箱</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              onChange={(e) => (user_name.current = e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">密码</Label>
            <Input
              id="password"
              type="password"
              onChange={(e) => (pass_word.current = e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={onSubmit}>
            登入
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
