import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function CardNews({ title, content, date, image }) {
    return (
        <Card className="w-120 h-100 bg-cover bg-center bg-no-repeat relative text-white" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
            <div className="absolute inset-0 bg-black opacity-70 z-9"></div>
            <CardHeader className="z-10 brightness-110">
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="max-w-[500px] break-words z-10 brightness-110">
                <p>{content}</p>
            </CardContent>
            <CardFooter className="z-10 brightness-110">
                <p>{date}</p>
            </CardFooter>
        </Card>
    )
}
