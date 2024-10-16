async function getNote(noteId: string) {
    const res = await fetch(
      `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`
    );
    const data = await res.json();
    return data;
  }
  
  export default async function NotePage({ params }: any) { //server 컴포넌트
    const note = await getNote(params.id);
  
    return (
      <div>
        <h1>notes/{note.id}</h1>
        <div>
          <h3>{note.title}</h3>
          <h5>{note.content}</h5>
          <p>{note.created}</p>
        </div>
      </div>
    );
  }