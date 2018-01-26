package controllers;
import java.util.concurrent.ThreadLocalRandom;
import java.util.Scanner;
public class CaesarCipher {
static int key;
static String alphabet;
public static String encrypt(String plain)
{ key=ThreadLocalRandom.current().nextInt(1,10);
  alphabet="KLMNOABCDEUVWXYZFGHIJPQRST@abcdeklmnofghijuvwxypqrstz_0123456789.";
  String ciphertext=""+plain.length()+"#";
  
  for(int i=0;i<plain.length();i++)
  { ciphertext+=alphabet.charAt((alphabet.indexOf(plain.charAt(i))+key)%65);
	  
  }
  int rn,len;

  if(ciphertext.length()<64)
  {       len=ciphertext.length();
	  for(int i=0;i<64-len;i++)
	  {
		  rn=ThreadLocalRandom.current().nextInt(0,64);
		  ciphertext+=alphabet.charAt(rn);
 		  
	  }
  }

  ciphertext+=key;
  
  return ciphertext;
  
}
public static String decrypt(String cipher)
{ int lenplain,temp,cipherkey;
  String str="",plaintext="";
  alphabet="KLMNOABCDEUVWXYZFGHIJPQRST@abcdeklmnofghijuvwxypqrstz_0123456789.";
  for(int i=0;cipher.charAt(i)!='#';i++)
  {  str+=cipher.charAt(i);
  }
  lenplain=Integer.parseInt(str);
  temp=cipher.indexOf("#");
  str="";
  
  for(int i=0;i<lenplain;i++)
  {  str+=cipher.charAt(i+temp+1);
  }
  
  cipherkey=Integer.parseInt(""+cipher.charAt((cipher.length()-1)));
  
  for(int i=0;i<str.length();i++)
  { if(alphabet.indexOf(str.charAt(i))-key<0)
    { temp=65+(alphabet.indexOf(str.charAt(i))-key);
      
      
    }
    else
    { temp=alphabet.indexOf(str.charAt(i))-key;
      
    }
    plaintext+=alphabet.charAt(temp);
  }

  return plaintext;
  
  }


}
