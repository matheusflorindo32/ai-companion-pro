# RELATÓRIO DE IMPLEMENTAÇÃO DE SERVIÇOS AWS

**Data:** 06/03/2026  
**Empresa:** Abstergo Industries  
**Responsável:** Matheus Florindo de Deus — TROPA CIENTÍFICA - Núcleo Tático

---

## Introdução

Este relatório apresenta o processo de implementação de ferramentas na empresa **Abstergo Industries**, realizado por **Matheus Florindo de Deus**. O objetivo do projeto foi elencar 3 serviços AWS, com a finalidade de realizar diminuição de custos imediatos.

---

## Descrição do Projeto

O projeto de implementação de ferramentas foi dividido em 3 etapas, cada uma com seus objetivos específicos. A seguir, serão descritas as etapas do projeto:

### Etapa 1: Amazon EC2 (Elastic Compute Cloud)

- **Nome da ferramenta:** Amazon EC2
- **Foco da ferramenta:** Migração de servidores on-premise para instâncias na nuvem com escalabilidade automática
- **Descrição de caso de uso:** A Abstergo Industries mantinha servidores físicos em data centers próprios com alto custo de manutenção, energia elétrica e equipe dedicada. Com a migração para instâncias EC2 utilizando Auto Scaling Groups e instâncias Spot/Reserved, a empresa reduziu em até **60% os custos de infraestrutura computacional**, eliminando a necessidade de provisionamento excessivo (over-provisioning) e pagando apenas pelos recursos efetivamente utilizados. As instâncias Reserved com contrato de 1 ano garantiram desconto adicional de até 40% em cargas de trabalho previsíveis.

### Etapa 2: Amazon S3 (Simple Storage Service)

- **Nome da ferramenta:** Amazon S3
- **Foco da ferramenta:** Armazenamento de arquivos corporativos com políticas de ciclo de vida e classes de armazenamento inteligentes
- **Descrição de caso de uso:** A empresa armazenava grandes volumes de dados de pesquisa, documentos regulatórios e backups em servidores de arquivo locais com custos crescentes de storage. Com a implementação do Amazon S3 utilizando classes de armazenamento como **S3 Intelligent-Tiering** e **S3 Glacier** para dados de acesso infrequente e arquivamento de longo prazo, os custos de armazenamento foram reduzidos em até **75%**. Políticas de ciclo de vida foram configuradas para mover automaticamente objetos antigos para classes mais econômicas, e a replicação cross-region garantiu a conformidade com requisitos de disaster recovery.

### Etapa 3: AWS Lambda

- **Nome da ferramenta:** AWS Lambda
- **Foco da ferramenta:** Processamento serverless de tarefas batch e integração de sistemas internos sem servidores dedicados
- **Descrição de caso de uso:** Diversos processos internos da Abstergo Industries — como geração de relatórios, processamento de dados de sensores laboratoriais e integração entre sistemas ERP e CRM — eram executados em servidores dedicados que ficavam ociosos durante grande parte do dia. Com a migração para **AWS Lambda**, essas tarefas passaram a ser executadas sob demanda, com cobrança por milissegundo de execução. Isso eliminou completamente os custos de servidores ociosos, resultando em uma **redução de 80% nos custos operacionais** dessas cargas de trabalho. A integração com Amazon EventBridge e SQS garantiu orquestração confiável dos fluxos de trabalho.

---

## Conclusão

A implementação de ferramentas na empresa **Abstergo Industries** tem como esperado a **redução significativa de custos operacionais de TI, maior escalabilidade e flexibilidade da infraestrutura, além de otimização do uso de recursos computacionais e de armazenamento**, o que aumentará a eficiência e a produtividade da empresa. Recomenda-se a continuidade da utilização das ferramentas implementadas e a busca por novas tecnologias que possam melhorar ainda mais os processos da empresa.

**Economia estimada total: 65-75% de redução nos custos de infraestrutura de TI.**

---

## Anexos

- Manual de configuração do Amazon EC2 com Auto Scaling
- Política de ciclo de vida do S3 (documento JSON)
- Arquitetura de referência das funções Lambda
- Planilha comparativa de custos (antes vs. depois)
- Documento de conformidade e segurança AWS (IAM Policies)

---

**Assinatura do Responsável pelo Projeto:**

**Matheus Florindo de Deus**  
TROPA CIENTÍFICA - Núcleo Tático
