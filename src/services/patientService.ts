import { faker } from '@faker-js/faker';

export const getTabs = async () => {
    return [
        {
            key: 'patient',
            title: 'New Patients',
            count: faker.number.int({ min: 5, max: 20 })
        },
        {
            key: 'nurse',
            title: 'Nurse Seen',
            count: faker.number.int({ min: 5, max: 20 })
        },
        {
            key: 'doctor',
            title: 'Doctor Visited',
            count: faker.number.int({ min: 5, max: 20 })
        },
        {
            key: 'appointment',
            title: 'Appointment',
            count: faker.number.int({ min: 5, max: 20 })
        }
    ];
};

const departments = [
    "Pediatrics",
    "Obstetrics",
    "Surgery",
    "Emergency",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Dermatology",
    "Gastroenterology",
    "Endocrinology",
    "Nephrology",
    "Pulmonology",
    "Rheumatology"
];

const statuses = [
    'follow-up',
    'new',
    'free'
];

export const getPatientData = (count: number) => Array(count).fill(0).map((_: number, i: number) => ({
    uhid: faker.string.numeric({ length: 8 }),
    name: faker.person.fullName(),
    age: faker.number.int({ min: 10, max: 60 }),
    gender: faker.person.sex(),
    billDate: faker.date.recent(),
    department: faker.helpers.arrayElement(departments),
    doctor: faker.person.fullName(),
    queueNo: i + 1,
    prevRec: faker.number.int({ min: 1, max: 4 }),
    status: faker.helpers.arrayElement(statuses),
}));