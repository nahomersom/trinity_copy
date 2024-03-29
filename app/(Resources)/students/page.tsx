"use client"

import { useState, useEffect } from "react";
import { PageTitle } from "@/components/utils/page-title";
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Sort, Filter, Group, CommandColumn, Search, Toolbar, PdfExport, ExcelExport } from '@syncfusion/ej2-react-grids';
import { getUsersList, Users } from "@/app/api/student";
import { useRouter } from "next/navigation";
import { useSelectedUser } from "@/app/contexts/selected-user-context";

export default function Students() {
    let grid:any;
    const { setSelectedUser } = useSelectedUser();
    const [usersList, setUsers] = useState<Users[] | null>(null);
    const router = useRouter(); 
    
    useEffect(() => {
        getUsersList()?.then((res) => {
            const filteredUsers = res.filter((user) => user.role.type === 'student');
            setUsers(filteredUsers);
        });
    }, []);

    const imageTemplate = (props:any) => {
        const src = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${props.profilePicture.url}`;
        return (
            <div className='image'>
                <img src={src} className="w-12 h-12 rounded-full" alt={props.EmployeeID}/>
            </div>
        );
    };

    const actionTemplate = (props:any) => {
        return (
            <div className='image'>
                <button 
                onClick={() => onGiveGrade(props)}
                className="rounded-md px-3 py-2 font-bold cursor-pointer bg-[#E7F7F5] text-[#0FB4AC] hover:bg-[#0FB4AC] hover:text-[#E7F7F5] focus:bg-[#0FB4AC] focus:text-[#E7F7F5]">
                    Give Grade
                    
                </button>
            </div>
        );
    };

    const onGiveGrade = (studentData: Users) => {
        // Navigate to the give-grade page with the user ID as a query parameter
        setSelectedUser(studentData);
        router.push(`/give-grade?id=${studentData.id}`);
    };

    const toolbarOptions = ['Search','PdfExport','ExcelExport'];
    const pageOptions = {
        pageSize: 8, pageSizes: true
    };
    const toolbarClick = (args:any) => {
        if (grid && args.item.id === "grid_2028068354_0_pdfexport") { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
          const exportProperties = {
            exportType: 'AllPages'
          };
          grid.pdfExport(exportProperties);
        }
        if (grid && args.item.id === "grid_2028068354_0_excelexport") { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            const exportProperties = {
                exportType: 'AllPages'
            };
            grid.excelExport(exportProperties);
        }
      }

    return (
        <section className="pt-20 md:pt-20">
            <div className="bg-white w-1/1 pb-20">
                <div className="mx-auto w-[70%] pt-10">
                    <PageTitle title="Students" />
                    {usersList !== null ? (
                        <GridComponent
                           toolbar={toolbarOptions}
                            dataSource={usersList}
                            allowGrouping={true}
                            allowSorting={true}
                            allowFiltering={true}
                            allowPaging={true}
                            pageSettings={pageOptions}
                            allowPdfExport={true}
                            allowExcelExport={true}

                            filterSettings={{ type: 'Excel' }}
                            height={180}
                            toolbarClick={toolbarClick} ref={g => grid = g}
                        >
                            <ColumnsDirective>
                                <ColumnDirective headerText='Student Image' width="100" textAlign="Center" template={imageTemplate}/>
                                <ColumnDirective field="fullName" width="100" textAlign="Center"/>
                                <ColumnDirective field="email" width="100" textAlign="Center" />
                                <ColumnDirective field="phone" width="100" format="C2" textAlign="Center" />
                                <ColumnDirective headerText='Action' width="100" textAlign="Center" template={actionTemplate}/>
                            </ColumnsDirective>
                            <Inject services={[Page, Sort, Filter, Group,
                                ExcelExport
                                , CommandColumn,PdfExport,Search, Toolbar]} />
                        </GridComponent>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </section>
    );
}
