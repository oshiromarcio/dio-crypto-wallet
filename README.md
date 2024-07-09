# GERADOR DE CARTEIRA BITCOIN

Ao rodar a aplicação um endereço de carteira Bitcoin será gerado, sua chave privada e o Seed para recuperação da carteira.
Por padrão tudo é criado em ambiente teste (testnet) do Bitcoin.

## PASSO A PASSO PARA GERAR E TESTAR A CARTEIRA

- Abra o terminal a partir da pasta da aplicação e execute com o comando: `node ./src/createWallet`;
- Um resultado será gerado parecido com isto:

    > Carteira gerada
    >
    > Endereço: mjUgTGv1EXyY99X1NNMrrAyK2GBxrvGktV
    >
    > Chave privada: cTEtMXcw5yUhT9wtwn2t8hiY58oDwEZm6nw94T7qegmdbMXwFGSh
    >
    > Seed: loop insane include own alien guilt noble case lock poet orange obvious

- Com os dados acima já será possível fazer os testes recebendo o enviando Bitcoins.

## TESTANDO AS TRANSAÇÕES EM CARTEIRAS

### FERRAMENTAS E GUIAS NECESSÁRIOS

- Para colocar saldo na carteira utilize o site [Bitcoin Faucet](https://coinfaucet.eu/);
- Para consultar o saldo utilize o [Blockchain Explorer](https://blockexplorer.one) ou [Blockstream Explorer](https://blockstream.info/testnet/);
- Baixe e instale a carteira [Electrum](https://electrum.org/) correspondente ao seu sistema operacional;
- Para conectar o Electrum na rede testnet siga os passos para o seu sistema operacional [neste guia](https://coinguides.org/bitcoin-testnet-core-wallet-electrum/).

### TESTES

- Após ter a primeira carteira gerada coloque saldo no endereço fornecido pela aplicação. Isto pode demorar alguns minutos ou horas para aparecer o saldo;
- Gere uma segunda carteira para podermos testar a transação da criptomoeda, guarde seus dados para usarmos posteriormente;
- Cadastre sua primeira carteira no Electrum. Certifique-se de que está utilizando a rede testnet;
- Com a carteira cadastrada no Electrum e o saldo transacionado nesta primeira carteira já é possível enviar as criptomoedas para a segunda carteira. Faça os testes de envio;
- Utilize os sites de blockchain explorer para consultar as transações entre as duas carteiras.