export const message = [{ 
    tagId: 'Admin',
    content: 'Revision of 2024 School Fees for Singapore Permanent Resident (SPR) Students',
    pinned: true,
    date: '08 Nov 2023',
    modal: {
        title: 'Revision of 2024 School Fees for Singapore Permanent Resident (SPR) Students',
        additionalDetails: `Dear Parents/Guardians of Y1-6 SPR Students,

        Please refer to the attached letter with regard to the revision of school fees for Year 2024.`,
        attachment: '2024 School Fees for SPR.pdf',
        author: 'MS NG HWEE KEANG',
        addedDate: '2023-11-08 1:19 PM'
    }
}, { 
    tagId: 'Admin',
    content: 'Revision of 2024 School Fees for Singapore Permanent Resident (SPR) Students',
    pinned: true,
    date: '25 Oct 2023',
    modal: {
        title: '',
        additionalDetails: '',
        attachment: '',
        author: '',
        addedDate: ''
    }
}, { 
    tagId: 'Admin',
    content: 'Travel Declaration for Year-End Holiday',
    pinned: true,
    date: '23 Oct 2023',
    modal: {
        title: '',
        additionalDetails: '',
        attachment: '',
        author: '',
        addedDate: ''
    }
}, { 
    tagId: 'Admin',
    content: 'Nominations open for Caring Teacher Awards 2024! ',
    pinned: true,
    date: '03 Oct 2023',
    modal: {
        title: '',
        additionalDetails: '',
        attachment: '',
        author: '',
        addedDate: ''
    }
}, { 
    tagId: 'Academic',
    content: 'Third language and MSP withdrawal [Year 2-Year 4] 2024',
    pinned: false,
    date: '31 Dec 2023',
    modal: {
        title: '',
        additionalDetails: '',
        attachment: '',
        author: '',
        addedDate: ''
    }
}, { 
    tagId: 'Student Devt',
    content: 'Reminder on Road Safety In and Out of School',
    pinned: false,
    date: '30 Dec 2023',
    modal: {
        title: '',
        additionalDetails: '',
        attachment: '',
        author: '',
        addedDate: ''
    }
}, { 
    tagId: 'Admin',
    content: 'For International Students - Removal of GST Subsidy on National Examination Fees From 2024',
    pinned: false,
    date: '11 Dec 2023',
    modal: {
        title: '',
        additionalDetails: '',
        attachment: '',
        author: '',
        addedDate: ''
    }
}, { 
    tagId: 'Admin',
    content: 'Collection of October to December 2023 School Fees and GIRO Dates for Year 2024',
    pinned: false,
    date: '15 Sep 2023',
    modal: {
        title: '',
        additionalDetails: '',
        attachment: '',
        author: '',
        addedDate: ''
    }
}]

export function sortMessage(message) {
    const pinned = message.filter(m => m.pinned);
    const unpinned = message.filter(m => !m.pinned);
    let sortedMessage = [...pinned, ...unpinned];

    return sortedMessage;
}