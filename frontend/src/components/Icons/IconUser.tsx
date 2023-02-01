export default function IconUser(){
  return(
    <div className="w-full flex flex-col gap-3 text-center">
      <div className="flex justify-center items-center">
        <img className="w-28 h-28 rounded-full" src="https://st.depositphotos.com/1269204/2716/i/450/depositphotos_27167511-stock-photo-smiling-middle-aged-man.jpg" alt="User" />
      </div>
      <div className=" font-semibold text-2xl sm:text-3xl text-white">
        <h2>"Nome do usuario"</h2>
      </div>
    </div>
  );
}