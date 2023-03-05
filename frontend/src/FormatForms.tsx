export const formNewCount = {
  url: '',
  inputs: [
    {
      key: 0,
      name: 'name',
      placeholder: 'Nome',
      type: 'text',
      image: 'user',
    },
    {
      key: 1,
      name: 'email',
      placeholder: 'Email',
      type: 'email',
      image: 'email',
    },
    {
      key: 2,
      name: 'password',
      placeholder: 'Senha',
      type: 'password',
      image: 'lock',
    },  
    {
      key: 3,
      name: 'check_password',
      placeholder: 'Confirme a Senha',
      type: 'password',
      image: 'lock',
    },
  ],
}

export const formLogin = {
  url: '',
  inputs: [
    {
      key: 0,
      name: 'username',
      placeholder: 'Email',
      type: 'email',
      image: 'email',
    },
    {
      key: 1,
      name: 'password',
      placeholder: 'Senha',
      type: 'password',
      image: 'lock',
    },
  ],
}

export const formNewActive = {
  url: '',
  inputs: [
    {
      key: 0,
      name: 'active',
      placeholder: 'Ativo',
      type: 'text',

    },
    {
      key: 1,
      name: 'date',
      placeholder: 'Data da Compra',
      type: 'date',
    },
    {
      key: 2,
      name: 'institution',
      placeholder: 'Instituição',
      type: 'text',
    },
    {
      key: 3,
      name: 'amount',
      placeholder: 'Quantidade',
      type: 'number',
    },
    {
      key: 4,
      name: 'paidPrice',
      placeholder: 'Valor Pago',
      type: 'number',
    },
    {
      key: 5,
      name: 'investedPrice',
      placeholder: 'Valor investido',
      type: 'number',
    },
    {
      key: 6,
      name: 'brokerageRate',
      placeholder: 'Taxa de corretagem',
      type: 'number',
    },
  ],
}

export const formProfile = {
  url: '',
  inputs: [
  {
      key: 0,
      name: 'name',
      placeholder: 'Nome',
      type: 'text',
      image: 'user',
    },
    {
      key: 1,
      name: 'email',
      placeholder: 'Email',
      type: 'email',
      image: 'email',
    },
    {
      key: 2,
      name: 'cpf',
      placeholder: 'CPF',
      type: 'text',
      image: 'card',
    },
    {
      key: 3,
      name: 'phone',
      placeholder: 'Telefone',
      type: 'text',
      image: 'phone',
    },
    {
      key: 4,
      name: 'password',
      placeholder: 'Senha',
      type: 'password',
      image: 'lock',
    },
    {
      key: 5,
      name: 'check_password',
      placeholder: 'Confirme a senha',
      type: 'password',
      image: 'lock',
    },
  ],
}

export const formNewWallet = {
  url: 'api/wallet/',
  inputs: [
    {
      key: 0,
      name: 'name',
      placeholder: 'Carteira',
      type: 'text',
    },
    {
      key: 1,
      name: 'description',
      placeholder: 'Descrição',
      type: 'text',
    },
  ],
}