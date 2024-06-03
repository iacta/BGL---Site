'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Users, Copy } from '@phosphor-icons/react';
export function CardHome() {
    return (
        <div className="flex justify-center sm:justify-end sm:mr-8 lg:mr-36 mt-8 sm:mt-24">
            <Card className="bg-gray-950 text-white shadow-lg shadow-green-500/50 rounded-lg border-none">
                <CardHeader>
                    <CardTitle className="font-bold text-center sm:text-left">JOGUE AGORA MESMO</CardTitle>
                    <CardDescription className="text-green-100 font-semibold text-center sm:text-left">BRASIL GAMER LIFE RPG</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3">
                    <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 rounded-md border p-3 border-transparent shadow-2xl bg-gray-900">
                        <Users size={24}/>
                        <div className="flex items-center space-x-3">
                            <div className="bg-gray-700 rounded-full border p-1 border-transparent flex items-center space-x-2">
                                <p className="text-sm font-normal leading-none text-green-200">
                                    ip.brasilgamerlife.com.br:7777
                                </p>
                                <Button variant="ghost" className="hover:bg-green-300">
                                    <Copy size={24} weight="bold" color="white" />
                                </Button>
                            </div>
                            <p className="text-green-100 font-semibold">
                                ???/100
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
