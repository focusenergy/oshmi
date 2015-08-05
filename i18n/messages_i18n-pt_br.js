// Internationalization Messages
// OSHMI/Open Substation HMI - Copyright (c) 2008-2014 - Ricardo L. Olsen

var Msg =
{
NomeProduto: 'OSHMI',
VersaoProduto: '3.4',

NomeVisorTelas:       'Visor de Telas',
NomeVisorEventos:     'Visor de Eventos',
NomeVisorHistorico:   'Visor de Eventos - Hist�rico',
NomeVisorTabular:     'Visor Tabular', 
NomeVisorAnormais:    'Visor de Alarmes',
NomeVisorTendencias:  'Visor de Tend�ncias',  
NomeVisorCurvas:      'Visor de Curvas',  
NomeDialogoInfo:      'Acesso ao Ponto',  
NomeDialogoCmd:       'Comando',  

FalhaWebserver:  'Falha no servidor Web!',

// websage.js
BlqAnot:     'Acesso ao comando bloqueado automaticamente por presen�a de anota��o.',
AcessCmd:    'Pressione para ter acesso ao comando.',
EstadoAtual: 'estado atual',
ConfNSuport: 'Configura��o n�o suportada!',
BrowserNSup: 'Browser n�o suportado!',
Qualific:    'Qualific',
QFalhado:    'FALHADO',
QSubst:      'SUBSTITUIDO',
QCalculado:  'CALCULADO',
QManual:     'MANUAL',
QNuncaAtu:   'NUNCA_ATUALIZADO',
QAlarmado:   'ALARMADO',
QAnotacao:   'ANOTACAO',
QAlmInib:    'ALM.INIBIDO',
QNaoNormal:  'ALM.PERSISTENTE',
QLimiteViol: 'LIMITE_VIOLADO',
QCongelado:  'CONGELADO',
QNormal:     'NORMAL',
QDPIntermed: 'INTERMEDIARIO',
QDPInvalido: 'INVALIDO',
QValor:      'valor',
SELTELA_OPC1:'Escolha a tela ...',

// Events.html
Eventos:       'Eventos',
ModoNormal:    'Modo Normal',
ModoAgregado:  'Modo Agregado',
ModoPanico:    'Modo P�nico',
ModoCongelado: 'CONGELADO!',
ModoHistorico: 'Hist�rico',
HIST:          '>Hist�rico de Eventos',
SPDATAINI:     'Data: ',
SPHORAINI:     'Hora Inicial: ',
SPFILTRO:      'Filtro: ',
btBuscaHist:   'Buscar',
EveNomesColunas: 'Data,Hora,ms,nponto,ID,Subest.,Descri��o,Evento,Flags,Qualif.',
ConfirmaSaida: 'Realmente deseja fechar o visor de eventos?',
EveFiltradosSE:'FILTRADOS',

// tabular.html
SPCOMANDAVEIS: 'Comand�veis',
SPANORMAIS:    'Alarmes',
SPSUBEST:      'Subest',
SPMODULO:      'M�dulo',
SPFILTROID:    'Filtro (ID)',
SELSE:         'Escolha a subesta��o',
SELMOD:        'Escolha o m�dulo para filtrar',
Filtro:        'Filtra pelo ID', 
TabNomesColunas: 'NPonto,ID,Subest.,Descr.,Est/Val Atual,Flg,Cmd,Qualif.,Nor,Hora Alarme',

// dlginfo.html
TENDTXT:     '>Acompanhar medida',
TABULARTXT:  '>Tela tabular do m�dulo',
CURVTXT:     '>Abrir no visor de curvas',
ANOTACAOTXT: 'Anota��o:',
DESBLOQTXT:  'Desbloqueia Comando',
COMANDAR:    'COMANDAR',
CBMOREINFO:  '+ Outras Op��es',
SPPONTOSUP:  'Ponto Supervisionado:',
ALRINTXT:    'Alarme Inibido',
SPLIMSUP:    'Limite Superior',
SPLIMINF:    'Limite Inferior',
SPLIMHIS:    'Histerese',
SPALTVALOR:  'Altera Valor',
SAIR:        'SAIR',
CANCELAR:    'CANCELAR',

// dlgcomando.html
SPPASSO2:    'Escolha a fun��o e clique o bot�o para comandar.',
CMDMOREINFO: '+ Outras informa��es',
SPPONTOCMD:  'Ponto de Comando:',

// trend.html
yaxisleft:    'Mostra valores menores [seta para cima]',
yaxisright:   'Mostra valores maiores [seta para baixo]',
yaxiszoomout: 'Menos zoom [-]',
yaxiszoomin:  'Mais zoom [+]',
yaxisminus:   'Reduz altura do gr�fico [1]',
yaxisplus:    'Aumenta altura [2]',
yaxiscolor:   'Muda a cor do gr�fico [3]',
xaxisleft:    'Retorna no tempo [seta para esquerda]',
xaxisright:   'Avan�a no tempo [seta para direita]',
xaxiszoomout: 'Menos zoom [/]',
xaxiszoomin:  'Mais zoom [*]',
xaxisminus:   'Reduz largura do gr�fico [<]',
xaxisplus:    'Aumenta largura do gr�fico [>]',
plotreset:    'Retorna ao zoom normal [0] [Num 5]',
ValorAtual:   'Valor Atual',

Fim: ""
};

var Titles =
{
// screen.html
ZOOMIN_ID :  'Aumenta [Num +]',
ZOOMOUT_ID:  'Reduz [Num -]',
ZPSobe:      'Move para cima [Num 8]',
ZPDesce:     'Move para baixo [Num 2]',
ZPEsq:       'Move para esquerda [Num 4]',
ZPCentro:    'Centraliza [Num 5]',
ZPDir:       'Move para direita [Num 6]',
PRODUTO_ID:  ( Msg.NomeVisorTelas + ' - ' + Msg.NomeProduto ),
TELAS_ID:    'Telas -->',
SELTELA:     'Escolha a tela: [<]=tela anterior, [>]=tela posterior, [1]=primeira tela, [2]=segunda tela, ..., [0]=d�cima tela ',
CORFUNDO_ID: 'Clique para alterar a cor de fundo.',
AJUDA_ID:    'Ajuda',
HORA_ATU:    'Hora da �ltima atualiza��o dos dados de supervis�o. Se ficar antigo tecle [F5]!',
ANORM_ID:    'Mostra Visor de Alarmes (alarmes n�o reconhecidos mais os persistentes)',
SILENCIA_ID: 'Silencia Bipe! [F9]',
SP_ALARMES:  'H� eventos n�o reconhecidos! Clique para abrir o Visor de Eventos.',
VENTOINHA:   'Se esta ventoinha parar, tecle [F5]!',
PROXTELAID:  'Pr�xima tela',
ANTETELAID:  'Tela anterior',
PLAY_ID:     'Inicia Slideshow',
PAUSE_ID:    'Pausa Slideshow',
TIMEMACHINE_ID: 'M�quina do Tempo',
TIMEMACHINECLOSE_ID: 'Fechar M�quina do Tempo',

// dlginfo.html
VALOR_HID:   'valor atual',
ESTADO_HID:  'estado atual',
SPQUALIF:    'Qualificadores do ponto',
SPDESCR_SUP: 'Descritivo do ponto',
SPCMDINTERTRAV: 'COMANDO INTERTRAVADO!', 
IMGANOT:     'Anota��o',
ANOTACAO:    'Texto da Anota��o',
TABULAR:     'Abre tela tabular do m�dulo.',
TENDENCIAS:  'Abre visor de tend�ncias.',
DIVBLKCMD:   'Marque para desbloquear intencionalmente comando (bloqueado pela presen�a de anota��o).',
COMANDAR:    'Pressione para ter acesso ao comando.',
CBMOREINFO:  'Clique para mostrar mais informa��es/op��es.',
NPONTO_SUP:  'N�mero e identificador do ponto.',
VLRNORCTRLS: 'Permite alterar o estado considerado normal.',
DIVINIB:     'Quando marcado, n�o registra alarme para o ponto.',
LIMCTRLS:    'Configura��o de limites para gera��o alarme de medida fora de faixa.',
LIMSUP:      'Define o valor acima do qual ser� gerado alarme.',
LIMINF:      'Define o valor abaixo do qual ser� gerado alarme.',
HISTER:      'Varia��o m�nima do valor para voltar a gerar alarme, ap�s excedido um limite.',
DIVALTVALOR: 'Permite alterar o valor/estado do ponto.',

// dlgcomando.html
COMANDO:     'Selecione o comando desejado.',
EXECUTAR:    'Executa o comando!',
CANCELAR:    'Cancela a execu��o do comando.',

// events.html
IMGEVENTOS:       ( Msg.NomeVisorEventos + ' - ' + Msg.NomeProduto +  ' - ' + '\nQualificadores: 0-9=Prioridade F=Falhado X=Nunca Atualizado K=Possui Comando A=Anota��o L=Alarmado I=Alm.Inibido C=Calculado M=Manual S=Subtitu�do U=Congelado N=N�o Normal Y=Comando Intertravado \n+n�mero=N�mero de eventos adicionais escondidos quando agregados. \nClique para mostrar NPonto e ID.' ),
imgNormal:        'Modo Normal: mostra todos os eventos que chegam. [1]',
imgAgregar:       'Modo Agregar: agrega os eventos de um mesmo ponto, mostrando somente o �ltimo. [2]',
imgPanico:        'Modo P�nico: agrega e mostra somente os eventos mais importantes. [3]',
imgCongelar:      'Modo Congelar: congela a tela (n�o atualiza) para facilitar a consulta. [4]',
imgHistorico:     'Modo Hist�rico: consulta de hist�rico de eventos. [5]',
imgFontSizeUp:    'Aumenta Tamanho da Fonte. [+]',
imgFontSizeDown:  'Reduz Tamanho da Fonte. [-]',
imgReconheceTudo: 'Reconhece Tudo! [F8]. Use [CTRL] + Click do mouse para reconhecer um �nico alarme.',
imgEliminaTudo:   'Elimina Tudo! [F2]',
imgAlarmes:       'H� eventos n�o reconhecidos!',
HDATAINI:         'Data para a pesquisa de eventos. [6]=Data Atual',
HHORAINI:         'Hora a partir da qual ser�o pesquisados os eventos para a data estabelecida. [7]=Zerar',
HFILTRO:          'Filtro para busca dos eventos. Exemplo: CIN = eventos da SE CIN. [8]=Apaga',
imgGpsOnEsc:      'Eventos com hora do GPS. Clique para mostrar a hora local.',
imgGpsOffEsc:     'Eventos com hora local. Clique para mostrar a hora do GPS.',
imgGpsOnFx:       'Eventos com hora do GPS.',
imgGpsOffFx:      'Eventos com hora local.',
imgFilter:        'Filtro de eventos por subesta��o. Marcar as que se deseja observar.',

// tabular.html
LEGQUAL_ID:       '\nQualificadores: 0-9=Prioridade F=Falhado X=Nunca Atualizado K=Possui Comando A=Anota��o L=Alarmado I=Alm.Inibido P=Alarme Persistente C=Calculado M=Manual S=Subtitu�do U=Congelado N=N�o Normal Y=Comando Intertravado \nClique para mostrar NPonto e ID.',
IMGTABULAR:       ( Msg.NomeVisorTabular + ' - ' + Msg.NomeProduto +  ' - ' + '\nQualificadores: 0-9=Prioridade F=Falhado X=Nunca Atualizado K=Possui Comando A=Anota��o L=Alarmado I=Alm.Inibido P=Alarme Persistente C=Calculado M=Manual S=Subtitu�do U=Congelado N=N�o Normal Y=Comando Intertravado \nClique para mostrar NPonto e ID.' ),
cbMostraCmd:      'Mostra somente os pontos que possuem comando associado. [1]',
cbForaNormal:     'Mostra somente os pontos com estado alarmados. [2]',

Fim: ""
};
