export interface Peoples {
    nome: string;
    sobrenome: string;
}

// Isso é uma Interface, você pode criar a mão ou pelo atalho no terminal:  ng g i nomeDaInterface
// "Interface descreve como o objeto deve se parecer. 
// No TypeScript, uma interface contém apenas a definição de métodos e propriedades, não sua implementação"

// interface: Uma interface é definida usando a palavra-chave interface
// Peoples: nome da interface que descreve a Classe, note que começa com P maiúsculo
// export: palavra-chave necessária para que as Classes em outros lugares possam utilizar

// Note que essa interface Peoples, passa nome do tipo string, e sobrenome do tipo string
// sempre que você utilizar essa interface para tipar um dado, necessariamente esse dado deverá
// passar nome do tipo string, e sobrenome do tipo string

