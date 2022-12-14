import React, { FormEvent, useState } from "react";
import { Navigate, useNavigate} from 'react-router-dom'
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader/index";
import warningIcon from "../../assets/images/icons/warning.svg"

import './styles.css';
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import api from "../../services/api";

function TeacherForm() {

    const history = useNavigate()

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setwhatsapp] = useState('')
    const [bio, setBio] = useState('')
    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduledItems, setScheduleItems] = useState([
        { week_day: 0, from: "", to: "" }
    ])



    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduledItems,
            { week_day: 0, from: "", to: "" }

        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const newArray = scheduledItems.map((scheduledItem, index) => {
            if (index === position) {
                return { ...scheduledItem, [field]: value }
            }

            return scheduledItem
        })
        setScheduleItems(newArray)
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault()

        api.post('classes', {
            name,avatar,whatsapp,bio,subject,
            cost: Number(cost),
            schedule: scheduledItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!')
            history('/')
        }).catch(() => {
            alert('Erro no cadastro!')
        })

    }  


    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário" >
            </PageHeader>

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input name="name" label="Nome completo" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />
                        <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e) => { setwhatsapp(e.target.value) }} />
                        <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => { setBio(e.target.value) }} />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select name="subject" label="Matéria"
                            value={subject} onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: "Artes", label: "Artes" },
                                { value: "Biologia", label: "Biologia" },
                                { value: "Matematica", label: "Matemática" },
                                { value: "Fisica", label: "Física" }
                            ]
                            } />
                        <Input name="cost" label="Custo da sua hora por aula" value={cost} onChange={(e) => { setCost(e.target.value) }} />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>

                        {scheduledItems.map((scheduledItem, index) => {
                            return (
                                <div key={scheduledItem.week_day} className="schedule-item">
                                    <Select name="week_day" label="Dia da Semana"
                                        value={scheduledItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: "0", label: "Domingo" },
                                            { value: "1", label: "Segunda-feira" },
                                            { value: "2", label: "Terça-feira" },
                                            { value: "3", label: "Quarta-feira" },
                                            { value: "4", label: "Quinta-feira" },
                                            { value: "5", label: "Sexta-feira" },
                                            { value: "6", label: "Sábado" },
                                        ]
                                        } />
                                    <Input name="from" label="Das:" type="time" value={scheduledItem.from} onChange={e => setScheduleItemValue(index, 'from', e.target.value)} />
                                    <Input name="to" label="Até:" type="time" value={scheduledItem.to} onChange={e => setScheduleItemValue(index, 'to', e.target.value)} />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante." />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;