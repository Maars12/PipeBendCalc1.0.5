package edu.cnm.deepdive.pipebendcalc105.ui.right_triangle;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;
import edu.cnm.deepdive.pipebendcalc105.R;

public class RightTriangleFragment extends Fragment {

  private WebView mWebView;

  private RightTriangleViewModel rightTriangleViewModel;

  @Override
  public View onCreateView(
      @NonNull LayoutInflater inflater, ViewGroup container,
      Bundle savedInstanceState) {
    View v = inflater.inflate(R.layout.fragment_right_triangle, container, false);

    mWebView = (WebView) v.findViewById(R.id.right_triangle);
    mWebView.loadUrl("file:///android_asset/indexx.html");

    // Enable Javascript
    WebSettings webSettings = mWebView.getSettings();
    webSettings.setJavaScriptEnabled(true);

    // Force links and redirects to open in the WebView instead of in a browser
    mWebView.setWebViewClient(new WebViewClient());

    return v;
  }

}