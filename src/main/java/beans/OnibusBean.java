package beans;

import java.util.List;
import java.util.Objects;

public class OnibusBean {
    

    private Long id;

    private String modelo;

    private String linha;

    private String terminal;

    private String caracteristicas;

    private String regiao;
    
    private List<String> pontos; 


    public OnibusBean(Long id, String modelo, String linha, String terminal, String caracteristicas, String regiao,List<String> pontos){
        this.id = id;
        this.modelo = modelo;
        this.linha = linha;
        this.terminal = terminal;
        this.caracteristicas = caracteristicas;
        this.regiao = regiao;
        this.pontos = pontos;
    }

     public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getLinha() {
        return linha;
    }

    public void setLinha(String linha) {
        this.linha = linha;
    }

    public String getTerminal() {
        return terminal;
    }

    public void setTerminal(String terminal) {
        this.terminal = terminal;
    }

    public String getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(String caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public String getRegiao() {
        return regiao;
    }

    public void setRegiao(String regiao) {
        this.regiao = regiao;
    }

    public List<String> getPontos() {
        return pontos;
    }

    public void setPontos(List<String> pontos) {
        this.pontos = pontos;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OnibusBean suaClasse = (OnibusBean) o;
        return Objects.equals(id, suaClasse.id) &&
               Objects.equals(modelo, suaClasse.modelo) &&
               Objects.equals(linha, suaClasse.linha) &&
               Objects.equals(terminal, suaClasse.terminal) &&
               Objects.equals(caracteristicas, suaClasse.caracteristicas);
    }

    @Override
    public int hashCode() {
         return Objects.hash(id, modelo, linha, terminal, caracteristicas);
    }


    @Override
    public String toString() {
        return "OnibusBean{" +
               "id=" + id +
               ", modelo='" + modelo + '\'' +
               ", linha='" + linha + '\'' +
               ", terminal='" + terminal + '\'' +
               ", caracteristicas='" + caracteristicas + '\'' +
               ", regiao='" + regiao + '\'' +
               ", pontos=" + pontos +
               '}';
    }

}
