'use client';

import { DownloadSimple } from '@phosphor-icons/react'
import { Button } from "@/components/ui/button"

export function DownloadButton() {
    return (
        <div className='flex justify-center items-center mr-60'>
            <Button className="bg-green-600 hover:bg-green-300 rounded-full p-6 shadow-md">
                <DownloadSimple size={24} weight="bold" /> BAIXAR AGORA
            </Button>
        </div>
    )
}
