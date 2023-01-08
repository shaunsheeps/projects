package com.currencyconverter;
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;

public class MyCurrencyConverter extends JFrame {

    private JPanel Main;
    private JLabel Title;
    private JComboBox RCurrency;
    private JComboBox LCurrency;
    private JTextArea LValue;
    private JTextArea RValue;
    private JButton Convert;
    private JButton Reset;
    private JButton Exit;
    private JLabel Currency1;
    private JLabel Currency2;
    private JLabel C1U;
    private JLabel C2U;
    String[] currencyUnits = {"units", "US dollar", "Chinese Yuan", "Mexican Peso" };
    String[] countries = {"", "United States", "China", "Mexico"};
    Double US_dollar = 1.31;
    Double CH_Yuan = 8.56;
    Double MX_Peso = 256.32;
    public MyCurrencyConverter(){
         new JList();
        for(int i = 0; i < countries.length; i++) {
            RCurrency.addItem(countries[i]);
            LCurrency.addItem(countries[i]);
        }
        LCurrency.addItemListener(this::itemStateChangedL);
        RCurrency.addItemListener(this::itemStateChangedR);
        Exit.addActionListener(this::exitProgram);
        Convert.addActionListener(this::convertingCurrency);
        Reset.addActionListener(this::resetCurrency);
    }
    private void resetCurrency(ActionEvent event){
        LCurrency.setSelectedIndex(0);
        RCurrency.setSelectedIndex(0);
        LValue.setText(null);
        RValue.setText(null);
    }
    private void convertingCurrency(ActionEvent event){
        if(LCurrency.getSelectedIndex() == 0 || RCurrency.getSelectedIndex() == 0 || LValue.getText().equals("")){
            JOptionPane.showMessageDialog(null, "You gotta select both countries and input the amount","Error Message", JOptionPane.INFORMATION_MESSAGE);
        }
        Double amountToChange = Double.parseDouble(LValue.getText());
        Double amountInPounds = 0.0;
        Double amountChanged = 0.0;
        switch (LCurrency.getSelectedItem().toString()){
            case "United States": amountInPounds = amountToChange / US_dollar;
            break;
            case "China": amountInPounds = amountToChange / CH_Yuan;
            break;
            case "Mexico": amountInPounds = amountToChange / MX_Peso;
        }
        switch(RCurrency.getSelectedItem().toString()){
            case "Mexico" : amountChanged = amountInPounds *MX_Peso;
            break;
            case "United States" : amountChanged = amountInPounds * US_dollar;
            break;
            case "China" : amountChanged = amountInPounds * CH_Yuan;
            break;
            default: amountChanged = amountInPounds * 0.0;
        }
        String Value = String.format("%.2f", amountChanged);
        RValue.setText(Value);
    }
    private void exitProgram(ActionEvent event) {
        System.exit(0);
    }

    private void itemStateChangedR(ItemEvent event) {
        if(event.getStateChange() == ItemEvent.SELECTED) {
            C2U.setText((currencyUnits[RCurrency.getSelectedIndex()]));
        }
    }

    public void itemStateChangedL(ItemEvent event) {
        if(event.getStateChange() == ItemEvent.SELECTED) {
            C1U.setText(currencyUnits[LCurrency.getSelectedIndex()]);
        }
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("MyCurrencyConverter");
        frame.setContentPane(new MyCurrencyConverter().Main);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        frame.setVisible(true);
    }
}
