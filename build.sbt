name := """anshretails"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava, PlayEbean)
scalaVersion := "2.11.7"

libraryDependencies  ++= Seq(
 javaJdbc,
 cache,
 javaJpa,
 javaWs,
 "org.postgresql" % "postgresql" % "9.3-1102-jdbc41",
 "com.amazonaws" % "aws-java-sdk-ses" % "1.11.8",
 "com.amazonaws" % "aws-java-sdk-iam" % "1.11.8",
 "commons-net" % "commons-net" % "3.5",
 "org.logback-extensions" % "logback-ext-loggly" % "0.1.4",
 "com.sun.mail" % "javax.mail" % "1.5.5",
 "org.mindrot" % "jbcrypt" % "0.3m",
 "org.apache.poi" % "poi" % "3.8",
 "org.apache.poi" % "poi-ooxml" % "3.9",
 "org.apache.commons" % "commons-io" % "1.3.2",
 "org.apache.commons" % "commons-lang3" % "3.4",
  "commons-collections" % "commons-collections" % "3.0",
 "org.apache.commons" % "commons-email" % "1.4",
 "org.apache.poi" % "poi" % "3.14",
"org.apache.poi" % "poi-scratchpad" % "3.14",
"org.apache.poi" % "poi-ooxml" % "3.14",
"org.apache.poi" % "poi-ooxml-schemas" % "3.14",
"org.simplejavamail" % "simple-java-mail" % "4.1.2",
"org.mindrot" % "jbcrypt" % "0.3m",
"org.apache.poi" % "poi-ooxml-schemas" % "3.14",
"org.json" % "json" % "20170516",
"nz.ac.waikato.cms.weka" % "WekaExcel" % "1.0.5",
"joda-time" % "joda-time" % "2.9.3",
"com.itextpdf" % "itextpdf" % "5.5.9",
"org.json"%"org.json"%"chargebee-1.0",
 "commons-net" % "commons-net" % "3.5",
 "javax.xml.crypto" % "jsr105-api" % "1.0.1",
"net.sourceforge.cssparser" % "cssparser" % "0.9.19",
"com.typesafe.akka" % "akka-actor_2.11" % "2.4.1",
"javax.xml.crypto" % "jsr105-api" % "1.0.1",
"com.jcraft" % "jsch" % "0.1.43-1",
"org.jasypt" % "jasypt" % "1.9.2",
 "com.opencsv" % "opencsv" % "3.8",
 "log4j" % "log4j" % "1.2.14"
)
libraryDependencies += "nz.ac.waikato.cms.weka" % "weka-dev" % "3.7.10"
libraryDependencies += "org.apache.commons" % "commons-math3" % "3.5"
libraryDependencies += "com.google.code.maven-play-plugin.org.playframework" % "play" % "1.2.6.1"
