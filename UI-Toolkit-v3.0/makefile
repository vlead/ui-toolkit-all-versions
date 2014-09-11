# Makefile for building ui-template.tgz


all: export compress

export:
	mkdir /tmp/ui        
	svn export ../ui/src/ /tmp/ui/src/
	svn export ../ui/scripts/ /tmp/ui/scripts/ 
	svn export ../ui/src/help/README.txt /tmp/ui/README.txt

compress:
	(cd /tmp/; tar -cvzf ui.tgz ui/;)
	mv /tmp/ui.tgz ./

clean:
	rm -rf /tmp/ui.tgz /tmp/ui/  
