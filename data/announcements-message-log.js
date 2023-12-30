export const message = [{ 
    tagId: 'CCA',
    content: 'Revision of 2024 School Fees for Singapore Permanent Resident (SPR) Students',
    pinned: true,
    date: '08 Nov 2023'
}, { 
    tagId: 'Student Devt',
    content: 'Revision of 2024 School Fees for Singapore Permanent Resident (SPR) Students',
    pinned: false,
    date: '08 Nov 2023'
}, { 
    tagId: 'Admin',
    content: 'Gojo revival',
    pinned: false,
    date: '08 Nov 2023'
}, { 
    tagId: 'CCA',
    content: 'Revision of 2024 School Fees for Singapore Permanent Resident (SPR) Students',
    pinned: true,
    date: '08 Nov 2023'
}, { 
    tagId: 'Student Devt',
    content: 'Revision of 2024 School Fees for Singapore Permanent Resident (SPR) Students',
    pinned: false,
    date: '08 Nov 2023'
}, { 
    tagId: 'Academic',
    content: 'Revision of 2024 School Fees for Singapore Permanent Resident (SPR) Students',
    pinned: true,
    date: '08 Nov 2023'
}, { 
    tagId: 'Student Devt',
    content: 'Revision of 2024 School Fees for Singapore Permanent Resident (SPR) Students',
    pinned: true,
    date: '08 Nov 2023'
}]

export function sortMessage(message) {
    const pinned = message.filter(m => m.pinned);
    const unpinned = message.filter(m => !m.pinned);
    let sortedMessage = [...pinned, ...unpinned];

    return sortedMessage;
}