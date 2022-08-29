import React from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader/index";
import Select from "../../components/Select";
import TeacherItem from "../../components/TeacherItem";

import './styles.css';


function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis.">
                <form id="search-teachers">
                <Select name="subject" label="Matéria" 
                    options={[
                        {value: "Artes", label: "Artes"},
                        {value: "Biologia", label: "Biologia"},
                        {value: "Matematica", label: "Matemática"},
                        {value: "Fisica", label: "Física"}
                    ]
                    } />

                    
                    <Input name="week_day" label="Dia da semana" />
                    <Input type="time" name="time" label="Hora" />      
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />

            </main>

        </div>
    )
}

export default TeacherList;