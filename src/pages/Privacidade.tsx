import { Shield, Eye, Lock, UserCheck, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacidade() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-hero opacity-10" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Política de Privacidade
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                Seu direito à privacidade e proteção de dados é nossa prioridade
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Overview */}
        <section className="py-24 bg-gradient-elegant">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-8">
                Compromisso com sua Privacidade
              </h2>
              <p className="text-lg text-muted-foreground">
                A Distribuidora de Bebidas Cervantes está comprometida em proteger 
                suas informações pessoais de acordo com a Lei Geral de Proteção de 
                Dados (LGPD) e melhores práticas de segurança.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-primary/10 p-3 w-fit mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Proteção</h3>
                  <p className="text-sm text-muted-foreground">
                    Dados protegidos com tecnologia de segurança
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-secondary/10 p-3 w-fit mx-auto mb-4">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Transparência</h3>
                  <p className="text-sm text-muted-foreground">
                    Uso claro e transparente dos seus dados
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-accent/10 p-3 w-fit mx-auto mb-4">
                    <Lock className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Confidencialidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Informações mantidas em absoluto sigilo
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-primary-light/10 p-3 w-fit mx-auto mb-4">
                    <UserCheck className="h-8 w-8 text-primary-light" />
                  </div>
                  <h3 className="font-semibold mb-2">Controle</h3>
                  <p className="text-sm text-muted-foreground">
                    Você tem controle sobre seus dados
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Policy */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-12">
              
              {/* Download PDF Button */}
              <div className="flex justify-center mb-8">
                <a 
                  href="/CERVANTES_CANAL_DE_COMUNICACAO_LGPD.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  download
                >
                  <Button size="lg" className="gap-2">
                    <FileText className="h-5 w-5" />
                    Formulário LGPD – Titular de Dados
                  </Button>
                </a>
              </div>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>O QUE SÃO DADOS PESSOAIS?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Segundo o art. 5º da Lei 13.709/2018 (Lei Geral de Proteção de Dados - LGPD), 
                    considera-se dado pessoal toda informação relacionada à pessoa natural identificada 
                    ou identificável a partir de dados pessoais diretos ou indiretos.
                  </p>
                  <p>
                    Outra categoria de dados pessoais são os denominados <strong>dados pessoais sensíveis</strong>, 
                    que se referem às informações da pessoa natural relacionadas à: raça, etnia, convicção religiosa, 
                    opinião política, filiação a sindicato ou organização de caráter religioso, filosófico ou político, 
                    relacionadas à saúde ou à vida sexual, dados genéticos ou biométricos.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>O QUE É TRATAMENTO DE DADOS PESSOAIS?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Conforme consta no art. 5º, inciso X da Lei 13.709/2018, tratamento é: toda operação 
                    realizada com dados pessoais, como as que se referem a coleta, produção, recepção, 
                    classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, 
                    arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, 
                    comunicação, transferência, difusão ou extração.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>QUEM SÃO OS TITULARES DE DADOS E QUAIS SÃO OS SEUS DIREITOS?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    São Titulares de Dados toda pessoa natural a quem se referem os dados que são objeto de tratamento.
                  </p>
                  <p>
                    Conforme art. 18 da Lei 13.709/2018, ao(à) titular estão garantidos os direitos de:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Confirmação da existência de tratamento</li>
                    <li>Acesso aos dados</li>
                    <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                    <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na LGPD</li>
                    <li>Portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da Autoridade Nacional, observados os segredos comercial e industrial</li>
                    <li>Eliminação dos dados pessoais tratados com o consentimento do(a) titular, exceto nas hipóteses previstas no art. 16 da Lei</li>
                    <li>Informação das entidades públicas e privadas com as quais o Controlador realizou uso compartilhado de dados</li>
                    <li>Informação sobre a possibilidade de não fornecer consentimento e sobre consequências da negativa</li>
                    <li>Revogação do consentimento, nos termos do §5.º do art. 8.º da Lei</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>QUAL O CANAL DE COMUNICAÇÃO OFERECIDO AOS TITULARES DE DADOS?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    O Canal de Comunicação é o meio utilizado pelo Titular de Dados para exercer, de forma 
                    simplificada e gratuita, o seu direito de autodeterminação informativa, como previsto no 
                    art. 2º, II, da Lei 13.709/2018.
                  </p>
                  <p>
                    Em observância ao que determina a LGPD, a Distribuidora de Bebidas Cervantes Ltda torna 
                    público o contato do seu Encarregado (Data Protection Officer - DPO) pelo tratamento de 
                    dados pessoais e os meios de atendimento para envio de eventuais comunicações, pedidos de 
                    esclarecimentos ou exercício de quaisquer dos direitos previstos nesta Política:
                  </p>
                  <div className="bg-muted/30 rounded-lg p-6 mt-4 space-y-3">
                    <p><strong>Encarregado de Dados:</strong> Fernanda Pimenta Leal</p>
                    <p><strong>E-mail:</strong> dpo@cervantes.com.br</p>
                  </div>
                  <p className="mt-4">
                    Através desse Canal de Comunicação e Contato, o Titular de Dados poderá obter do Controlador 
                    (Cervantes), a qualquer momento e mediante requisição, informações sobre o tratamento dos seus dados.
                  </p>
                  <p>
                    Desta forma, para exercer seu direito de autodeterminação informativa e, assim, sanar suas 
                    dúvidas e obter esclarecimentos, o Titular de Dados deverá preencher o Formulário disponibilizado 
                    na aba "Formulário LGPD – Titular de Dados" e enviar para o e-mail acima descrito.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Coleta de Dados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Coletamos apenas os dados necessários para prestar nossos serviços, incluindo:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Informações de contato (nome, e-mail, telefone)</li>
                    <li>Dados comerciais para relacionamento B2B</li>
                    <li>Informações de localização para entrega</li>
                    <li>Histórico de interações para melhorar o atendimento</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Uso dos Dados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Utilizamos seus dados exclusivamente para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Processar pedidos e entregas</li>
                    <li>Comunicação comercial e suporte ao cliente</li>
                    <li>Melhorar nossos serviços e experiência do usuário</li>
                    <li>Cumprir obrigações legais e regulamentares</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Compartilhamento de Dados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Seus dados não são vendidos ou compartilhados com terceiros, exceto:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Com a Ambev, nossa parceira comercial, para fins operacionais</li>
                    <li>Com prestadores de serviço sob contrato de confidencialidade</li>
                    <li>Quando exigido por lei ou autoridades competentes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Segurança dos Dados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Implementamos medidas técnicas e organizacionais para proteger seus dados:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Criptografia de dados sensíveis</li>
                    <li>Controle de acesso restrito</li>
                    <li>Monitoramento contínuo de segurança</li>
                    <li>Backups seguros e regulares</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Cookies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Utilizamos cookies para melhorar sua experiência de navegação. 
                    Você pode gerenciar as preferências de cookies nas configurações 
                    do seu navegador.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Alterações na Política</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Esta política pode ser atualizada periodicamente. Alterações 
                    significativas serão comunicadas através de nossos canais oficiais.
                  </p>
                  <p className="text-sm">
                    <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
