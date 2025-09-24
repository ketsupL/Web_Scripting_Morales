import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

type DashboardProps = {
    user: {
        id: number;
        name: string;
        email: string;
        gender: string;
        hobbies: string[];
        country: string;
    };
}

export default function Dashboard({ user }: DashboardProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h1 className="text-2xl font-bold">Hello, {user.name}!</h1>
                    <p>
                    You are <span className="font-medium">{user.gender}</span>.
                    </p>

                    <div>
                    <p>Your hobbies:</p>
                    {user.hobbies.length > 0 ? (
                        <ul className="ml-5 list-disc text-blue-300">
                        {user.hobbies.map((hobby, i) => (
                            <li key={i}>{hobby}</li>
                        ))}
                        </ul>
                    ) : (
                        <p>No hobbies listed.</p>
                    )}
                    </div>

                    <p>
                    You are from <span className="font-medium">{user.country}</span>.
                    </p>
            </div>
        </AppLayout>
    );
}
