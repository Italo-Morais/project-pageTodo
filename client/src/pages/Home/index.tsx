import { Container } from "./style";
import { useForm, SubmitHandler } from "react-hook-form";
import { API } from "../../services/api";
// import background from "../../assets/background.png"

export function Home() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  function onSubmit(data: any) {
    async function sendTasks() {
      const response = await API.post('', data)
      return response.data 
    }

    sendTasks();
    alert('Tarefa adicionada com sucesso.')
    reset();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Adicione suas Tarefas</h1>
        <section>
          <label htmlFor="task">Titulo da tarefa:</label>
          <input
            className="titleTasks"
            type="text"
            {...register('titleTask', { required: true })}
            placeholder="Digite sua tarefa"
            id="task"
            />
          {errors.titleTask && <span className="error">Este campo é obrigatório!</span>}
        </section>

        <section>
          <label htmlFor="">Descreva sua tarefa:</label>
          <textarea 
            className="taskDescription" 
            maxLength={250} 
            {...register('descriptionTask', { required: true })}
            id="" 
            cols={30} 
            rows={10}
            placeholder="Digite a descrição da Tarefa"
            >
          </textarea>
          {errors.descriptionTask && <span className="error">Este campo é obrigatório!</span>}
        </section>

        <button className="buttonTasks">Adicionar</button>
      </form>
    </Container>
  )
}


