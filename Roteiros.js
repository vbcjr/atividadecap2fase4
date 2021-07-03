var dados = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br> A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br> Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";

var tituloinicio = dados.search("Gulliver");
var titulofim = dados.search("</title>");
var titulo = dados.substring(tituloinicio,titulofim);
alert(titulo);


var cidade1txtbuscainicio = dados.search("<b>->1");
var cidade1txtbuscafim = dados.search("<b>->2");
var cidade1txt = dados.substring(cidade1txtbuscainicio,cidade1txtbuscafim);
// busca texto da cidade 3
var cidade2txtbuscainicio = dados.search("<b>->2");
var cidade2txtbuscafim = dados.search("<b>->3");
var cidade2txt = dados.substring(cidade2txtbuscainicio,cidade2txtbuscafim);
// busca texto da cidade 3
var cidade3txtbuscainicio = dados.search("<b>->3");
var cidade3txtbuscafim = dados.search("</html>");
var cidade3txt = dados.substring(cidade3txtbuscainicio,cidade3txtbuscafim);

// busca nome da cidade 1
var cidade1infocidadebuscainicio = cidade1txt.search ("<b>->")+24;
var cidade1infocidadebuscafim = cidade1txt.search ("</b><br>")-1;
var cidade1infocidade = cidade1txt.substring(cidade1infocidadebuscainicio,cidade1infocidadebuscafim);
// busca nome da cidade 2
var cidade2infocidadebuscainicio = cidade2txt.search ("<b>->")+24;
var cidade2infocidadebuscafim = cidade2txt.search ("</b><br>")-1;
var cidade2infocidade = cidade2txt.substring(cidade2infocidadebuscainicio,cidade2infocidadebuscafim);
// busca nome da cidade 3
var cidade3infocidadebuscainicio = cidade3txt.search ("<b>->")+24;
var cidade3infocidadebuscafim = cidade3txt.search ("</b><br>")-1;
var cidade3infocidade = cidade3txt.substring(cidade3infocidadebuscainicio,cidade3infocidadebuscafim);

var cidadesavaliadasprincipal = ("CIDADES AVALIADAS" + "\n" + cidade1infocidade + "\n" + cidade2infocidade + "\n" + cidade3infocidade)
alert(cidadesavaliadasprincipal);



var cidadeinicio1 = dados.search("->1");
var cidadefim1 = dados.search("</b>");
var cidade1 = dados.substring(cidadeinicio1,cidadefim1);
var cidadefinal1 = cidade1.replaceAll('<br>', '\n')
                        .replaceAll('</b>', ' ')
                        .replaceAll('*', ' ')
                        .replaceAll('<b>', ' ')
                        .replaceAll('#', '\n');
alert(cidadefinal1);


var roteiroAinicio = dados.split("#Roteiro A", 1).join("#Roteiro A").length;;
var roteiroAfim = dados.split("#Roteiro B", 1).join("#Roteiro B").length;;
var roteiroA = dados.substring(roteiroAinicio,roteiroAfim);
var roteiroAquant = roteiroA .split(";").length;
alert("Número de locais do roteiro A = " + roteiroAquant);
var roteiroAfinal = roteiroA.replaceAll('<br>', '\n')
                        .replaceAll('</b>', ' ')
                        .replaceAll('*', ' ')
                        .replaceAll('<b>', ' ')
                        .replaceAll('#', '\n');
alert(roteiroAfinal);

var cidadeinicio2 = dados.split("->2", 1).join("->2").length;;
var cidadefim2 = dados.split("</b>", 2).join("</b>").length;;
var cidade2 = dados.substring(cidadeinicio2,cidadefim2);
var cidadefinal2 = cidade2.replaceAll('<br>', '\n')
                        .replaceAll('</b>', ' ')
                        .replaceAll('*', ' ')
                        .replaceAll('<b>', ' ')
                        .replaceAll('#', '\n');
alert(cidadefinal2);


var roteiroAinicio = dados.split("#Roteiro A", 2).join("#Roteiro A").length;;
var roteiroAfim = dados.split("#Roteiro B", 2).join("#Roteiro B").length;;
var roteiroA = dados.substring(roteiroAinicio,roteiroAfim);
var roteiroAquant = roteiroA .split(";").length;
alert("Número de locais do roteiro A = " + roteiroAquant);
var roteiroAfinal = roteiroA.replaceAll('<br>', '\n')
                        .replaceAll('</b>', ' ')
                        .replaceAll('*', ' ')
                        .replaceAll('<b>', ' ')
                        .replaceAll('#', '\n');
alert(roteiroAfinal);


var cidadeinicio3 = dados.split("->3", 1).join("->3").length;;
var cidadefim3 = dados.split("</b>", 3).join("</b>").length;;
var cidade3 = dados.substring(cidadeinicio3,cidadefim3);
var cidadefinal3 = cidade3.replaceAll('<br>', '\n')
                        .replaceAll('</b>', ' ')
                        .replaceAll('*', ' ')
                        .replaceAll('<b>', ' ')
                        .replaceAll('#', '\n');
alert(cidadefinal3);


var roteiroAinicio = dados.split("#Roteiro A", 3).join("#Roteiro A").length;;
var roteiroAfim = dados.split("#Roteiro B", 3).join("#Roteiro B").length;;
var roteiroA = dados.substring(roteiroAinicio,roteiroAfim);
var roteiroAquant = roteiroA .split(";").length;
alert("Número de locais do roteiro A = " + roteiroAquant);
var roteiroAfinal = roteiroA.replaceAll('<br>', '\n')
                        .replaceAll('</b>', ' ')
                        .replaceAll('*', ' ')
                        .replaceAll('<b>', ' ')
                        .replaceAll('#', '\n');
alert(roteiroAfinal);