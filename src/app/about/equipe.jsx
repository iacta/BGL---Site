'use client';
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const staff = [
    {
        name: 'MaluKo_Free',
        cargo: 'Desenvolvedor',
        func: 'Responsável pelo desenvolvimento do gamemode.',
        icon: '/maluko.png'
    },
    {
        name: 'Christopher',
        cargo: 'Desenvolvedor',
        func: 'Responsável pelo desenvolvimento do gamemode.',
        icon: '/chris.png'
    },
    {
        name: 'Vrauz',
        cargo: 'Fundador',
        func: 'Responsável pelo servidor.',
        icon: '/vrauz.png'
    },
];

export function Equipe() {
    return (
            <Carousel className="w-full max-w-3xl">
                <CarouselContent className="flex items-center">
                    {staff.map((staffMember, index) => (
                        <CarouselItem key={index} className="w-60 p-4">
                            <Card className="bg-gray-950 text-white h-full rounded-lg border-transparent shadow-2xl">
                                <CardContent className="relative flex flex-col items-center justify-center h-full pt-2">
                                    <img src={staffMember.icon} alt="" className="h-24 w-24 rounded-full border-4 border-transparent mb-4 transform -scale-x-100" />
                                    <div className="text-center">
                                        <span className="block text-xl font-semibold mb-1">{staffMember.name}</span>
                                        <span className="block text-lg font-semibold text-green-400 mb-2">{staffMember.cargo}</span>
                                        <span className="text-sm max-w-xs">{staffMember.func}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="bg-transparent text-white p-2 rounded-full mx-2 hover:bg-green-400 transition duration-300" />
                <CarouselNext className="bg-transparent text-white p-2 rounded-full mx-2 hover:bg-green-400 transition duration-300" />
            </Carousel>
    );
}
