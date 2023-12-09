package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import beans.OnibusBean;
import service.OnibusService;

@WebServlet("/linhas")
public class OnibusServlet extends HttpServlet {
    
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
        OnibusService onibusService = new OnibusService();
         List<OnibusBean> listaOnibus = onibusService.listarOnibus();
        Gson gson = new Gson();
        String jsonListaOnibus = gson.toJson(listaOnibus);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
    
    
        PrintWriter out = response.getWriter();
        out.print(jsonListaOnibus);
        out.flush();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
