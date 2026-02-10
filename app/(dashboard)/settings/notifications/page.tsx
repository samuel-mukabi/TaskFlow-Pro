"use client";

export default function NotificationsSettings() {
    return (
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Notifications</h2>

            <div className="space-y-6">
                {/* Email Notifications */}
                <div className="flex items-center justify-between py-4 border-b border-slate-100">
                    <div>
                        <h3 className="font-semibold text-slate-900">Email Notifications</h3>
                        <p className="text-sm text-slate-600">
                            Receive email updates for activity
                        </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-stone-600"></div>
                    </label>
                </div>

                {/* Desktop Notifications */}
                <div className="flex items-center justify-between py-4 border-b border-slate-100">
                    <div>
                        <h3 className="font-semibold text-slate-900">
                            Desktop Notifications
                        </h3>
                        <p className="text-sm text-slate-600">
                            Show notifications on desktop
                        </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-stone-600"></div>
                    </label>
                </div>

                {/* Weekly Digest */}
                <div className="flex items-center justify-between py-4 border-b border-slate-100">
                    <div>
                        <h3 className="font-semibold text-slate-900">Weekly Digest</h3>
                        <p className="text-sm text-slate-600">
                            Receive weekly summary emails
                        </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-stone-600"></div>
                    </label>
                </div>

                {/* New Granular Types (Added to fill the page) */}
                <div className="pt-4">
                    <h3 className="font-semibold text-slate-900 mb-4">
                        Alert Preferences
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="comments"
                                className="w-4 h-4"
                                defaultChecked
                            />
                            <label htmlFor="comments" className="text-slate-700">
                                Comments on my tasks
                            </label>
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="mentions"
                                className="w-4 h-4"
                                defaultChecked
                            />
                            <label htmlFor="mentions" className="text-slate-700">
                                Mentions (@username)
                            </label>
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="reminders"
                                className="w-4 h-4"
                                defaultChecked
                            />
                            <label htmlFor="reminders" className="text-slate-700">
                                Task due date reminders
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
