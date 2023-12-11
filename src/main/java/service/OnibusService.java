package service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import beans.OnibusBean;

public class OnibusService {
    


    public List<OnibusBean> listarOnibus(){
        List<OnibusBean> onibus = new ArrayList<OnibusBean>();
        OnibusBean linha1 = new OnibusBean(1L, "Millenium IV - piso baixo", "Linha 80 - UFSCar", "Terminal São Paulo", "Ar-condicionado, 8 assentos preferenciais, elevador, tomadas USB", "Oeste", Arrays.asList("R. LEOPOLDO MACHADO", "R. SANTA CRUZ", "R. MAJOR JOÃO LÍCIO", "AV. JUSCELINO K. DE OLIVEIRA"));
        OnibusBean linha2 = new OnibusBean(2L, "Millenium BRT - articulado", "Linha T30 - Brigadeiro Tobias", "Terminal São Paulo", "Ar-condicionado, 16 assentos preferenciais, elevador, tomadas USB, piso alto", "Norte", Arrays.asList("R. LEOPOLDO MACHADO", "AV. SÃO PAULO", "ROD. RAPOSO TAVARES", "MARGINAL (ROD. CELSO CHARURI)","AV. BANDEIRANTES"));
        OnibusBean linha3 = new OnibusBean(3L, "Apache VIP - piso simples", "Linha 100 - Expresso", "Terminal Santo Antônio/Terminal São Paulo", "Ar-condicionado, 8 assentos preferenciais, elevador, tomadas USB", "Oeste", Arrays.asList("AV. AFONSO VERGUEIRO", "R. SOUZA PEREIRA"));
        OnibusBean linha4 = new OnibusBean(4L, "Apache VIP - piso simples", "Linha 82 - Cond. Ana Maria via Gal. Carneiro ", "Terminal São Paulo", "Ar-condicionado, 8 assentos preferenciais, elevador, tomadas USB", "Sul", Arrays.asList("R. LEOPOLDO MACHADO", "R. SANTA CRUZ", "R. MAJOR JOÃO LÍCIO", "AV. JUSCELINO K. DE OLIVEIRA","AV. MOREIRA CESAR", "PÇA. NOVE DE JULHO"));
        OnibusBean linha5 = new OnibusBean(5L, "Millenium BRT - articulado", "Linha T140 - Term. Vit. Régia / Term. Sto. Antônio", "Terminal Vitória Régia/Terminal Santo Antônio", "Ar-condicionado, 16 assentos preferenciais, elevador, tomadas USB, piso alto", "Oeste", Arrays.asList("AV. LUIZ FERRAZ DE SAMPAIO JUNIOR", "R. ARAÇOIABA", "R. DOM ANTONIO ALVARENGA", "VIADUTO JÂNIO DA SILVA QUADROS","CORREDOR HERMELINO MATARAZZO", "AV. IPANEMA"));
        OnibusBean linha6 = new OnibusBean(6L, "Apache VIP - piso simples", "Linha 73 - Júlio de Mesquita", "Terminal Santo Antônio", "8 assentos preferenciais, elevador", "Oeste", Arrays.asList("AV. LUIZ FERRAZ DE SAMPAIO JUNIOR", "R. FRANCISCO SCARPA", "AV. AFONSO VERGUEIRO", "R. CAP. BENTO MANOEL RIBEIRO","AV. GENERAL CARNEIRO", "AV. AMÉRICO FIGUEIREDO"));
        OnibusBean linha7 = new OnibusBean(7L, "Apache VIP BRT - articulado", "Linha 65 - Campolim", "Terminal Santo Antônio", "Ar-condicionado, 16 assentos preferenciais, elevador, tomadas USB", "Leste", Arrays.asList("AV. AFONSO VERGUEIRO", "R. SOUZA PEREIRA", "R. ÁLVARO SOARES", "R. SETE DE SETEMBRO","R. PADRE LUIZ", "R. SANTA CLARA"));
        OnibusBean linha8 = new OnibusBean(8L, "Millenium BRT - articulado", "Linha 31/1 - Cajurú", "Terminal São Paulo", "Ar-condicionado, 16 assentos preferenciais, elevador, tomadas USB", "Leste", Arrays.asList("A.T. CAJURÚ", "AV. PARANÁ", "R. JORGE ELIAS", "R. ZACARIAS DOS SANTOS","R. JUVENAL DE PAULA SOUZA", "R. TELEMACO CARDOSO"));
        OnibusBean linha9 = new OnibusBean(9L, "Millenium BRT - articulado", "Linha 200 - Norte / Sul", "Terminal Vitória Régia/Terminal São Paulo", "Ar-condicionado, 16 assentos preferenciais, elevador, tomadas USB, piso alto", "Oeste", Arrays.asList("AV. PROFª. IZORAIDA MARQUES PEREZ", "AV. ANTÔNIO CARLOS COMITRE", "AV. WASHIGTON LUIZ"));
        
        onibus.add(linha1);
        onibus.add(linha2);
        onibus.add(linha3);
        onibus.add(linha4);
        onibus.add(linha5);
        onibus.add(linha6);
        onibus.add(linha7);
        onibus.add(linha8);
        onibus.add(linha9);

        return onibus;
    }
}
