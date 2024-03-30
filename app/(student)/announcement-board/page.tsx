"use client"
import { useState } from "react";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import { getAnnouncement } from "@/app/api/student";

interface AnnouncementData {
    ScheduleData: { Start_Time: string, End_Time: string, Schedule: string }[];
    TodoData: { Todo: string }[];
}

export default function AnnouncementBoard() {
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [selectedAnnouncementData, setAnnouncementData] = useState<AnnouncementData | null>(null);

    const onchange = (args: any) => {
        let year: number;
        let month: number;
        let day: number;

        if (args && args.value instanceof Date) {
            const selectedDate: Date = args.value;
            year = selectedDate.getFullYear();
            month = selectedDate.getMonth() + 1;
            day = selectedDate.getDate();
        } else {
            const currentDate: Date = new Date();
            year = currentDate.getFullYear();
            month = currentDate.getMonth() + 1;
            day = currentDate.getDate();
        }

        const formattedDate: string = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        callAnnouncementsAPI(formattedDate);
        setSelectedDay(day);
        setSelectedYear(year);
    };

    const callAnnouncementsAPI = (date: any) => {
        getAnnouncement(date).then((data: any) => {
            console.log('date data is', data);
            setAnnouncementData(shapeData(data));
        });
    };

    const shapeData = (data: any) => {
        const shapedData: AnnouncementData = { ScheduleData: [], TodoData: [] };

        if (!data || data.length === 0) {
            return shapedData;
        }

        data.forEach((announcement: any) => {
            const { Date, Schedule, Todo, Start_Time, End_Time } = announcement.attributes;
            shapedData.ScheduleData.push({ Start_Time: formatTime(Start_Time), End_Time: formatTime(End_Time), Schedule: Schedule || '' });
            shapedData.TodoData.push({ Todo: Todo || '' });
        });

        return shapedData;
    };

    const formatTime = (time: string) => {
        return time.split(':')[0] + ':' + time.split(':')[1];
    };

    return (
        <>
        <section className="pt-20 md:pt-20">
            <div className="bg-white pl-[8%] pb-20">
                <div className="m-auto flex flex-col items-center w-[80%] pt-14">
                    <div className="flex md:flex-row flex-col-reverse ">
                        <div className="border-[1.5px] border-[#002937] p-5 pr-[65px]" style={{ flex: "1" }}>
                            <div className="flex flex-col text-[#002937]">
                                <div>
                                    <div className="flex gap-2">
                                        <h1 className="font-bold text-[40px]">{selectedDay} </h1>
                                        <h1 className="self-end pb-[10px] text-[20px]">{selectedYear}</h1>
                                    </div>
                                    <h1 className="font-bold text-[20px]">To Do</h1>
                                    {selectedAnnouncementData && selectedAnnouncementData.TodoData.length > 0 ? (
                                        selectedAnnouncementData.TodoData.map((todo: any, index: number) => (
                                            <p key={index}>{todo.Todo}</p>
                                        ))
                                    ) : (
                                        <p>No Todo Found</p>
                                    )}
                                </div>
                                <div className="mt-6">
                                    <h1 className="font-bold text-[20px]">SCHEDULE</h1>
                                    {selectedAnnouncementData && selectedAnnouncementData.ScheduleData.length > 0 ? (
                                        selectedAnnouncementData.ScheduleData.map((schedule: any, index: number) => (
                                            <div key={index} className="flex gap-6 mt-2">
                                                <span>{schedule.Start_Time} - {schedule.End_Time}</span>
                                                <span>{schedule.Schedule}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No Schedule Found</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <CalendarComponent id="calendar" change={onchange} created={onchange} />
                    </div>
                </div>
            </div>
        </section>
    </>
    
    );
}
