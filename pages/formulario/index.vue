<template>
  <div class="all p-d-flex p-flex-column p-jc-center p-ai-center">
    <div class="container p-d-flex p-flex-column p-jc-top p-ai-center">
      <div class="titulo p-d-flex p-flex-column p-jc-center p-ai-left">
        <h1>Itens de Avaliação</h1>
      </div>

      <div
        class="form"
        v-for="(question, index) in this.questions"
        :key="index"
      >
        <div class="titulo1">
          <h1>{{ index + 1 }}. {{ question.topic }}</h1>
        </div>
        <main class="pergunta1 p-d-flex p-flex-row p-jc-left p-ai-center">
          <section class="right-1">
            <div class="pg1">
              <h6 id="txUm">Nível de importância:</h6>
              <div
                class="
                  rbt_importancia
                  p-d-flex p-flex-column p-jc-center p-ai-center
                "
                id="v-model-radiobutton"
              >
                <div
                  class="
                    container-item
                    p-d-flex p-flex-row p-jc-left p-ai-center
                  "
                >
                  <input
                    type="radio"
                    :id="'import-one-' + index"
                    :value="'import-one-' + index"
                  />
                  <label :for="'import-one-' + index">Alta</label>
                </div>
                <div
                  class="
                    container-item
                    p-d-flex p-flex-row p-jc-left p-ai-center
                  "
                >
                  <input
                    type="radio"
                    :id="'import-two-' + index"
                    :value="'import-two-' + index"
                  />
                  <label :for="'import-two-' + index">Media</label>
                </div>
                <div
                  class="
                    container-item
                    p-d-flex p-flex-row p-jc-left p-ai-center
                  "
                >
                  <input
                    type="radio"
                    :id="'import-three-' + index"
                    :value="'import-three-' + index"
                  />
                  <label :for="'import-three-' + index">Baixa</label>
                </div>
              </div>
            </div>
          </section>

          <section class="left-1">
            <div class="pg1">
              <h6 id="txdois">Nível de satisfação:</h6>
              <div
                class="rbt_satis p-d-flex p-flex-row p-jc-left p-ai-top"
                id="v-model-radiobutton"
              >
                <div class="ruim p-d-flex p-flex-column p-jc-start p-ai-start">
                  <div
                    class="
                      container-item
                      p-d-flex p-flex-row p-jc-left p-ai-center
                    "
                  >
                    <input
                      type="radio"
                      :id="'satisf-one-' + index"
                      :value="'satisf-one-' + index"
                    />
                    <label :for="'satisf-one-' + index">Otimo</label>
                  </div>

                  <div
                    class="
                      container-item
                      p-d-flex p-flex-row p-jc-left p-ai-center
                    "
                  >
                    <input
                      type="radio"
                      :id="'satisf-two-' + index"
                      :value="'satisf-two-' + index"
                    />
                    <label :for="'satisf-two-' + index">Bom</label>
                  </div>

                  <div
                    class="
                      container-item
                      p-d-flex p-flex-row p-jc-left p-ai-center
                    "
                  >
                    <input
                      type="radio"
                      :id="'satisf-three-' + index"
                      :value="'satisf-three-' + index"
                    />
                    <label :for="'satisf-three-' + index">Não se aplica</label>
                  </div>
                </div>

                <div class="ruim">
                  <div
                    class="
                      container-item
                      p-d-flex p-flex-row p-jc-left p-ai-center
                    "
                  >
                    <input
                      type="radio"
                      :id="'satisf-four-' + index"
                      :value="'satisf-four-' + index"
                    />
                    <label :for="'satisf-four-' + index">Regular</label>
                  </div>

                  <div
                    class="
                      container-item
                      p-d-flex p-flex-row p-jc-left p-ai-center
                    "
                  >
                    <input
                      type="radio"
                      :id="'satisf-five-' + index"
                      :value="'satisf-five-' + index"
                    />
                    <label :for="'satisf-five-' + index">Ruim</label>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div class="divisor"></div>
      </div>

      <!-- FIM PERGUNTA 1 -->
    </div>

    <div class="buttons p-d-flex p-flex-row p-jc-evenly p-ai-center">
      <button type="button" class="btn-send">Enviar</button>
      <button type="button" class="btn-clean">Limpar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "formulario",
  layout: "default",
  data() {
    return {
      questions: [
        { topic: "Limpeza e conservação da sala de aula e da oficina" },
        {
          topic:
            "Disponibilidade de equipamentos, máquinas e ferramentas para a realização do curso",
        },
        {
          topic:
            "Qualidade de apostilas, livros e textos, quanto a impressão e a adequação da informação",
        },
        { topic: "Cumprimento do horário das aulas" },
        { topic: "Cumprimento dos objetivos propostos pelo curso" },
        { topic: "Preocupação do docente com o aproveitamento dos alunos" },
        { topic: "Domínio do docente sobre os assuntos tratados" },
        {
          topic:
            "O aprendizado, na teoria e na prática, em relação ao esperado",
        },
        { topic: "Conteúdo do curso, em relação às expectativas" },
        { topic: "Atendimento da recepção / secretaria da escola" },
        { topic: "Atendimento telefônico da escola" },
        { topic: "Atendimento da cantina / lanchonete" },
        { topic: "Atendimento da Biblioteca" },
      ],
    };
  },
  methods: {
    printer(element) {
      console.log(element);
    },
  },
};
</script>

<style lang="scss" scoped>
.all {
  height: auto;
  width: 100vw;
  max-width: 100vw;
  padding: 70px 0;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("@/static/classroom_bg.png");

  $size-title: 18px;
  $size-topic: 16px;
  $size-question: 15px;

  .titulo,
  .titulo1 {
    font-size: $size-title;
  }

  #txUm,
  #txdois {
    font-size: $size-topic;
  }

  .rbt_importancia,
  .rbt_satis {
    font-size: $size-question;
  }

  .container {
    width: 80vw;
    background-color: #fff;
    border-radius: 15px;

    .titulo {
      width: 100%;
      height: 80px;
      font-weight: bold;
      background-color: #c22a1f;
      padding-left: 40px;
      color: #fff;
    }

    .form {
      background-color: white;
      width: 100%;
      height: auto;
      padding: 20px;
      border-radius: 15px;

      .pergunta1 {
        height: auto;
        width: 100%;

        .right-1 {
          height: 170px;
          width: auto;
          background-color: white;

          .pg1 {
            width: 100%;
            margin-top: 15px;

            #txUm {
              margin-left: 10px;
            }

            .rbt_importancia {
              margin-top: 12px;
              margin-left: 10px;

              .container-item {
                label {
                  margin-top: 10px;
                  width: 70px;
                }
                input {
                  margin-top: 10px;
                  width: 25px;
                }
              }
            }
          }
        }

        .left-1 {
          height: 170px;
          width: auto;

          .pg1 {
            width: 100%;
            margin-top: 15px;
            margin-left: 15px;

            #txdois {
              margin-left: 10px;
            }

            .rbt_satis {
              margin-top: 12px;
              margin-left: 10px;

              .ruim {
                width: 150px;

                .container-item {
                  label {
                    margin-top: 10px;
                    width: 100px;
                  }
                  input {
                    margin-top: 10px;
                    width: 25px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .divisor {
      background-color: red;
      width: 96%;
      height: 2px;
      z-index: 100;
    }
  }

  .buttons {
    width: 100%;

    .btn-send,
    .btn-clean {
      width: 180px;
      border-radius: 10px;
      padding: 20px;
      font-size: 20px;
      font-weight: bold;
      margin: 40px 0;
      transition: all 0.3s;

      &:hover {
        transform: scale(1.03);
        cursor: pointer;
        transition: all 0.3s;
      }
    }

    .btn-send {
      background-color: #c22a1f;
      color: #fff;
    }

    .btn-clean {
      background-color: #fff;
      border: 2px solid #c22a1f;
      color: #c22a1f;
    }
  }
}

@media screen and (max-width: 800px) {
  .all {
    $size-title: 12px !important;
    $size-topic: 13px !important;
    $size-question: 12px !important;

    .titulo,
    .titulo1 {
      font-size: $size-title;
    }

    #txUm,
    #txdois {
      font-size: $size-topic;
    }

    .rbt_importancia,
    .rbt_satis {
      font-size: $size-question;
    }

    .container {
      // height: 90%;
      width: 85vw;
    }
  }
}

@media screen and (max-width: 615px) {
  .all {
      padding: 40px 0;

    .ruim {
      width: 120px !important;
    }

    #txUm {
      margin-left: 0px !important;
    }

    .rbt_importancia {
      margin-left: 0px !important;
    }

    #txdois {
      margin-left: 0px !important;
    }

    .rbt_satis {
      margin-left: 0px !important;
    }

    .btn-send,
    .btn-clean {
      width: 120px !important;
      padding: 15px !important;
      font-size: 15px !important;
    }
  }
}

@media screen and (max-width: 501px) {
  .rbt_satis {
    margin-top: 27px !important;
  }
}
</style>