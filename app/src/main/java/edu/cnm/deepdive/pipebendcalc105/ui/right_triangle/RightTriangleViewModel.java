package edu.cnm.deepdive.pipebendcalc105.ui.right_triangle;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

public class RightTriangleViewModel extends ViewModel {

  private MutableLiveData<String> mText;

  public RightTriangleViewModel() {
    mText = new MutableLiveData<>();
    mText.setValue("This is dashboard fragment");
  }

  public LiveData<String> getText() {
    return mText;
  }
}