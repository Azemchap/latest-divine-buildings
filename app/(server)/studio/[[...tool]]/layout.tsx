

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body>
                <main className="min-h-screen py-4">
                    {children}
                </main>
            </body>
        </html>
    );
}
