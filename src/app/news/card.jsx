import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function CardNews({ title, content, date, image }) {
    // Separando o conteúdo em linhas usando '\n' como delimitador
    const contentLines = content.split('\n');

    return (
        <Card className="bg-cover bg-center bg-no-repeat relative text-white" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
            <div className="absolute inset-0 bg-black opacity-70 z-9"></div>
            <CardHeader className="z-10 brightness-110">
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="max-w-[500px] min-h-[250px] break-words z-10 brightness-110 font-semibold">
                {contentLines.map((line, index) => (
                    <p key={index} className="mb-2">{line}</p>
                ))}
            </CardContent>
            <CardFooter className="z-10 brightness-110">
                <p>{date}</p>
            </CardFooter>
        </Card>
    )
}
