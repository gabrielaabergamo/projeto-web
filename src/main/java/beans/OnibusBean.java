package beans;

import java.util.Objects;

public class OnibusBean {
    

    private Long id;

    private String modelo;

    private String linha;

    private String terminal;

    private String caracteristicas;


    public OnibusBean(Long id, String modelo, String linha, String terminal, String caracteristicas){
        this.id = id;
        this.modelo = modelo;
        this.linha = linha;
        this.terminal = terminal;
        this.caracteristicas = caracteristicas;
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
               '}';
    }

}
