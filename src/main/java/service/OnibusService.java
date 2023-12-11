package service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import beans.OnibusBean;

public class OnibusService {
    


    public List<OnibusBean> listarOnibus(){
        List<OnibusBean> onibus = new ArrayList<OnibusBean>();
        OnibusBean linha1 = new OnibusBean(1L, "Millenium IV - piso baixo", "Linha 80 - UFSCar", "Terminal São Paulo", "Ar-condicionado, 8 assentos preferenciais, elevador, tomadas USB", "Oeste", Arrays.asList("rua1", "rua 2", "rua3", "rua 4","rua5", "rua 6"));
        OnibusBean linha2 = new OnibusBean(2L, "Millenium BRT - articulado", "Linha T30 - Brigadeiro Tobias", "Terminal São Paulo", "Ar-condicionado, 16 assentos preferenciais, elevador, tomadas USB, piso alto", "Oeste", Arrays.asList("rua1", "rua 2", "rua3", "rua 4","rua5", "rua 6"));
        OnibusBean linha3 = new OnibusBean(3L, "Apache VIP - piso simples", "Linha 100 - Expresso", "Terminal Santo Antônio/Terminal São Paulo", "Ar-condicionado, 8 assentos preferenciais, elevador, tomadas USB", "Oeste", Arrays.asList("rua1", "rua 2", "rua3", "rua 4","rua5", "rua 6"));
        OnibusBean linha4 = new OnibusBean(4L, "Apache VIP - piso simples", "Linha 82 - Cond. Ana Maria via Gal. Carneiro ", "Terminal São Paulo", "Ar-condicionado, 8 assentos preferenciais, elevador, tomadas USB", "Oeste", Arrays.asList("rua1", "rua 2", "rua3", "rua 4","rua5", "rua 6"));
        OnibusBean linha5 = new OnibusBean(5L, "Millenium BRT - articulado", "Linha T140 - Term. Vit. Régia / Term. Sto. Antônio", "Terminal Vitória Régia/Terminal Santo Antônio", "Ar-condicionado, 16 assentos preferenciais, elevador, tomadas USB, piso alto", "Oeste", Arrays.asList("rua1", "rua 2", "rua3", "rua 4","rua5", "rua 6"));
        OnibusBean linha6 = new OnibusBean(6L, "Apache VIP - piso simples", "Linha 73 - Júlio de Mesquita", "Terminal Santo Antônio", "8 assentos preferenciais, elevador", "Oeste", Arrays.asList("rua1", "rua 2", "rua3", "rua 4","rua5", "rua 6"));
        OnibusBean linha7 = new OnibusBean(7L, "Apache VIP BRT - articulado", "Linha 65 - Campolim", "Terminal Santo Antônio", "Ar-condicionado, 16 assentos preferenciais, elevador, tomadas USB", "Oeste", Arrays.asList("rua1", "rua 2", "rua3", "rua 4","rua5", "rua 6"));
        OnibusBean linha8 = new OnibusBean(8L, "Millenium BRT - articulado", "Linha 31/1 - Cajurú", "Terminal São Paulo", "Ar-condicionado, 16 assentos preferenciais, elevador, tomadas USB", "Oeste", Arrays.asList("rua1", "rua 2", "rua3", "rua 4","rua5", "rua 6"));
        OnibusBean linha9 = new OnibusBean(9L, "Millenium BRT - articulado", "Linha 200 - Norte / Sul", "Terminal Vitória Régia/Terminal São Paulo", "Ar-condicionado, 16 assentos preferenciais, elevador, tomadas USB, piso alto", "Oeste", Arrays.asList("rua1", "rua 2", "rua3", "rua 4","rua5", "rua 6"));
        
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
