<template>
     <main class="Cadastro">
        <section class="logo_panel ">
            <img src="../../assets/media/suga.png"/>
        </section>
        <section class="Cadastro_panel">
            <div class="formulario_cadastro">
                <h1 id="titulo">LOGIN</h1>
                <form action="" class="loginForm">
                    <div class="inputcontainer">
                        <div class="inputCombo">
                            <label id="lblcpf" for="name">CPF</label>
                            <input type="cpf" id="name" required/>
                        </div>
                        <div class="inputCombo combo2">
                            <label id="lblsenha" for="senha">SENHA</label>
                            <input type="password" id="senha" required/>
                        </div>
                        
                        <button type="submit " class="btn_enviar ">ENTRAR</button>
                    </div>    
                </form>
            </div>
        </section>
    </main>  
</template>

<script>
export default {
  data() {
    return {
      login: [],
    };
  },
};
</script>
<style lang="scss">
.loginForm{
    width: 55%;
    height: auto;
}

.formulario_cadastro{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
}

.inputcontainer{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

#titulo{
    display: flex;
    align-items: center;
    width:120px;
    padding-top:10px;
    font-size: 36px;
    padding-bottom: 50px;
}

.Cadastro {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.Cadastro_panel {
    height:100vh;
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;
}

.logo_panel {
    height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #313131;
    color: white;
}

img {
	margin-top:0px;
    align-items: center;
    display: flex;
    width: 700px;
    height: 450px;
}

.formulario_cadastro .btn_enviar {
    align-items: center;
    background-color: #DC3D3D;
    color: white;
    border: none;
    justify-content: center;
    display: flex;
    height: 50px;
    width: 600px;
    margin-top: 75px;
}

.inputcontainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative; 
    width: 100%;
    line-height: 44px;
}
.combo2{
    margin-top: 60px
}
#lblcpf #lblsenha {
    width: 100%;
    color: #d3d3d3;
}

#name {
    width: 100%;
    border: 0;
    border-bottom: 2px solid black;

}
#senha {
    width: 100%;
    border: 0;
    border-bottom: 2px solid black;
}

#name:focus,
#name:valid {
    outline: 0;
    border-color: crimson;
}

#senha:focus,
#senha:valid {
    outline: 0;
    border-color: crimson;
}
</style>