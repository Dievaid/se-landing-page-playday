import React from "react";

export const Content: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
                <div className="space-y-8 p-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        <span className="text-teal-700">Rent</span> Your Field,
                        <br />
                        <span className="text-teal-700">Find</span> Your Game!
                    </h1>
                    <div className="grid md:grid-cols-2 gap-4 text-lg">
                        <div className="space-y-2">
                            <p className="font-medium">
                                Choose from a variety of sports fields based on your preferred location, field type, and amenities.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-medium">
                                Browse active games that need players, or sign up for notifications when new games are available.
                            </p>
                        </div>
                    </div>
                    <p className="text-lg font-medium">
                        Reserve instantly with flexible time slots for soccer, basketball, tennis, and more.
                    </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <img
                            src="/sports.png"
                            alt="Sports equipment illustration"
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-cente border-none">
                <img src="/sports_all.png" className="lg:flex sm:hidden"/>
            </div>
        </div>
    )
}