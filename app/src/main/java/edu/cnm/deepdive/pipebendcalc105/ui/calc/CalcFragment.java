package edu.cnm.deepdive.pipebendcalc105.ui.calc;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import edu.cnm.deepdive.pipebendcalc105.R;

public class CalcFragment extends Fragment {

  private WebView mWebView;
  private CalcViewModel calcViewModel;

  @Override
  public View onCreateView(
      @NonNull LayoutInflater inflater, ViewGroup container,
      Bundle savedInstanceState) {
    View v = inflater.inflate(R.layout.fragment_calc, container, false);

    mWebView = (WebView) v.findViewById(R.id.calc);
    mWebView.loadUrl("file:///android_asset/index.html");

    // Enable Javascript
    WebSettings webSettings = mWebView.getSettings();
    webSettings.setJavaScriptEnabled(true);

    // Force links and redirects to open in the WebView instead of in a browser
    mWebView.setWebViewClient(new WebViewClient());

    return v;
  }
}