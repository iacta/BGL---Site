import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function PUT(request) {
    const jsonDirectory = path.join(process.cwd(), 'public/news');
    const filePath = path.join(jsonDirectory, 'data.json');

    try {
        const { data } = await request.json();
        const newDataString = JSON.stringify(data, null, 2);
        await fs.writeFile(filePath, newDataString);

        return NextResponse.json({ message: 'News Add Sucessful!!' });
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao reescrever dados', details: error.message }, { status: 500 });
    }
}
function formatDate(dateString) {
    if (!dateString || typeof dateString !== 'string') {
        return "Data inválida";
    }

    const [day, month, year] = dateString.split('/').map(Number);
    console.log(day)
    console.log(month)
    console.log(year)

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return "Data inválida";
    }

    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const formattedDate = `${day} de ${monthNames[month - 1]} de ${year}`;

    return formattedDate;
}

