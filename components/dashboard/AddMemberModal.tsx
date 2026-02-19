import React, { useEffect, useState } from 'react';
import { TeamMember, UserProfile } from "@/types";
import { addProjectMember, fetchWorkspaceMembers } from "@/app/actions/workspace.ts";
import { useUserProfile } from "@/hooks/useUserProfile.ts";

interface AddMemberModalProps {
    isOpen: boolean
    onClose: () => void
    onMembersAdded?: () => void
    projectTitle?: string
    projectMembers: TeamMember[]
    projectId: string
}

const AddMemberModal = ({ isOpen, onClose, onMembersAdded, projectTitle, projectId, projectMembers }: AddMemberModalProps) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [workspaceMembers, setWorkspaceMembers] = useState<UserProfile[]>([])
    const [selected, setSelected] = useState<UserProfile[]>([])
    const { profile } = useUserProfile()
    const workspaceId = profile?.workspace_id

    useEffect(() => {
        const fetchMembers = async () => {
            if (isOpen && projectId && workspaceId) {
                const members = await fetchWorkspaceMembers(workspaceId)
                setWorkspaceMembers(members)
            }
        }
        fetchMembers()
    }, [isOpen, projectId, workspaceId])

    if (!isOpen) return null;

    const filteredMembers = workspaceMembers
        .filter(member => !projectMembers.some(pm => pm.id === member.id))
        .filter(member =>
            member.full_name!.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.email!.toLowerCase().includes(searchTerm.toLowerCase())
        )

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50 backdrop-blur-sm p-4 md:p-0">
            <div className="relative w-full max-w-md max-h-full rounded-lg bg-white shadow-xl ring-1 ring-gray-200">
                {/* Modal Header */}
                <div className="flex items-center justify-between border-b p-4 md:p-5 rounded-t gap-5">
                    <h3 className="text-base font-semibold text-slate-900">
                        Add members to: <br /> <span
                            className="text-slate-900 text-sm">{projectTitle || 'Project'}</span>
                    </h3>
                    <button
                        onClick={onClose}
                        type="button"
                        className="ms-auto inline-flex size-7 items-center justify-center bg-transparent cursor-pointer hover:border hover:rounded-full w-10"
                        data-modal-hide="authentication-modal"
                    >
                        <svg
                            className="h-3 w-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-4 md:p-5">
                    <form className="space-y-4" action="#"
                        onSubmit={async (e) => {
                            e.preventDefault()

                            if (!projectId || selected.length === 0) return

                            for (const member of selected) {
                                await addProjectMember(projectId, member.id)
                            }

                            setSelected([])
                            onMembersAdded?.()
                            onClose()
                        }}>
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-slate-900"
                            >
                                Search by email or name
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                    <svg
                                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    name="search"
                                    id="search-users"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-slate-900 dark:placeholder-gray-400 outline-none"
                                    placeholder="name@company.com"
                                />
                            </div>
                        </div>

                        {/* Suggested / Recent Users List (Mock Data) */}

                        <div className="mt-4">
                            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Workspace
                                Members</h4>
                            <ul className="space-y-3 max-h-60 overflow-y-auto">
                                {filteredMembers.map((member) => (
                                    <li key={member.id}
                                        className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            {member.avatar_url ? (
                                                <img className="w-8 h-8 rounded-full ring-2 ring-white"
                                                    src={member.avatar_url}
                                                    alt={member.full_name} />
                                            ) : (
                                                <div
                                                    className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs ring-2 ring-white">
                                                    {member.full_name!.trim().split(/\s+/).map(n => n[0]).join('').toUpperCase()}
                                                </div>
                                            )}
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{member.full_name}</p>
                                                <p className="text-xs text-gray-500">{member.email}</p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setSelected(members => members.some(m => m.id === member.id) ? members.filter(m => m.id !== member.id) : [...members, member])}
                                            type="button"
                                            className="text-gray-400 hover:text-indigo-600 group-hover:bg-white p-1 rounded-full transition-all">
                                            {selected.some(m => m.id === member.id) ? (
                                                <svg className="w-5 h-5 text-green-600" fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                                </svg>
                                            )}
                                        </button>
                                    </li>
                                ))}
                                {filteredMembers.length === 0 && (
                                    <p className="text-sm text-gray-500 text-center py-4">No members found</p>
                                )}
                            </ul>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
                            <button
                                onClick={onClose}
                                type="button"
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={selected.length === 0}
                                className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors ${selected.length === 0
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-stone-700 hover:bg-stone-900"
                                    }`}
                            >
                                Add Selected Members
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMemberModal;
